import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Student from '@/models/Student';
import { verifyAuth } from '@/middleware/auth';
import { deleteCloudinaryImage } from '@/lib/cloudinary';
import { Types } from 'mongoose';

// GET single student
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid student ID' },
        { status: 400 }
      );
    }

    const student = await Student.findById(id);

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: 'Student fetched successfully',
        data: student,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Fetch single student error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch student' },
      { status: 500 }
    );
  }
}

// PUT - Update student (Admin only, cleans up previous Cloudinary image if changed)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await verifyAuth(request);

    if (!auth.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid student ID' },
        { status: 400 }
      );
    }

    const existingStudent = await Student.findById(id);
    if (!existingStudent) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    const { class: studentClass, highlight, image, publicId } = await request.json();

    // Check if image or publicId is updated and old image needs deletion from Cloudinary
    if (publicId && existingStudent.publicId && existingStudent.publicId !== publicId) {
      console.log(`Deleting previous image from Cloudinary: ${existingStudent.publicId}`);
      await deleteCloudinaryImage(existingStudent.publicId);
    } else if (image && existingStudent.image !== image && existingStudent.publicId) {
      console.log(`Image URL changed. Deleting previous image from Cloudinary: ${existingStudent.publicId}`);
      await deleteCloudinaryImage(existingStudent.publicId);
    }

    existingStudent.class = studentClass || existingStudent.class;
    existingStudent.highlight = highlight || existingStudent.highlight;
    if (image) existingStudent.image = image;
    if (publicId) existingStudent.publicId = publicId;

    const updatedStudent = await existingStudent.save();

    return NextResponse.json(
      {
        message: 'Student updated successfully',
        data: updatedStudent,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Update student error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update student' },
      { status: 500 }
    );
  }
}

// DELETE - Delete student (Admin only, deletes image from Cloudinary)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const auth = await verifyAuth(request);

    if (!auth.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid student ID' },
        { status: 400 }
      );
    }

    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    // Delete image from Cloudinary if publicId exists
    if (student.publicId) {
      console.log(`Deleting image from Cloudinary on delete: ${student.publicId}`);
      await deleteCloudinaryImage(student.publicId);
    }

    return NextResponse.json(
      {
        message: 'Student deleted successfully',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Delete student error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete student' },
      { status: 500 }
    );
  }
}
