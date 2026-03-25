import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    imageUrl: {
      type: String,
      required: [true, 'Please provide an image URL'],
    },
    category: {
      type: String,
      enum: ['event', 'activity', 'achievement', 'other'],
      default: 'other',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Gallery ||
  mongoose.model<IGallery>('Gallery', GallerySchema);
