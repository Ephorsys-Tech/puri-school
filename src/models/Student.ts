import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
  class: string;
  highlight: string;
  image: string;
  publicId?: string;
  createdAt: Date;
  updatedAt: Date;
}

const StudentSchema: Schema = new Schema(
  {
    class: {
      type: String,
      required: [true, 'Please provide student class'],
      trim: true,
    },
    highlight: {
      type: String,
      required: [true, 'Please provide student highlight/achievement'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Please provide student image URL'],
    },
    publicId: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

if (mongoose.models.Student) {
  delete mongoose.models.Student;
}

export default mongoose.model<IStudent>('Student', StudentSchema);
