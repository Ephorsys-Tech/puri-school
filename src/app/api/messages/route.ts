import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAuth } from '@/middleware/auth';
import { contactSchema } from '@/lib/validations/contactSchema';

// GET all messages with pagination (Admin only, limit=20 per page)
export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const auth = await verifyAuth(request);

    if (!auth.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));
    const limit = Math.max(1, parseInt(searchParams.get('limit') || '20', 10));
    const skip = (page - 1) * limit;

    const total = await Message.countDocuments();
    const messages = await Message.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(total / limit) || 1;

    return NextResponse.json(
      {
        message: 'Messages fetched successfully',
        data: messages,
        pagination: {
          total,
          page,
          totalPages,
          limit,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch messages error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST - Create message (Public, validated via Zod)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body using Zod schema
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const firstErrorMessage = Object.values(fieldErrors).flat()[0] || 'Validation failed';
      return NextResponse.json(
        {
          error: firstErrorMessage,
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validation.data;

    await connectDB();

    const newMessage = await Message.create({
      name,
      email: email || '',
      phone,
      message,
    });

    return NextResponse.json(
      {
        message: 'Message sent successfully',
        data: newMessage,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create message error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message' },
      { status: 500 }
    );
  }
}
