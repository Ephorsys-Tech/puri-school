import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';
import { verifyAuth } from '@/middleware/auth';

// GET - Fetch all students
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const students = await Student.find().sort({ createdAt: 1 });

    return NextResponse.json(
      {
        message: 'Students fetched successfully',
        data: students,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch students error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch students' },
      { status: 500 }
    );
  }
}

// POST - Create student (Admin only, Max 4 limit)
export async function POST(request: NextRequest) {
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

    // Check current count of students
    const count = await Student.countDocuments();
    if (count >= 4) {
      return NextResponse.json(
        { error: 'Maximum limit of 4 students reached. Please edit or delete an existing student.' },
        { status: 400 }
      );
    }

    const { class: studentClass, highlight, image, publicId } = await request.json();

    if (!studentClass || !highlight || !image) {
      return NextResponse.json(
        { error: 'Class, highlight, and image are required fields' },
        { status: 400 }
      );
    }

    const student = await Student.create({
      class: studentClass,
      highlight,
      image,
      publicId: publicId || '',
    });

    return NextResponse.json(
      {
        message: 'Student created successfully',
        data: student,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create student error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create student' },
      { status: 500 }
    );
  }
}
