import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import path from 'path';

// Manual loading of .env.local for scripts
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;
const EMAIL = process.env.INITIAL_ADMIN_EMAIL || 'admin@school.org';
const PASSWORD = process.env.INITIAL_ADMIN_PASSWORD || 'admin-password-123';

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

// Define the Admin Schema directly in case we can't import the model easily in context
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI!);
    console.log('Successfully connected.');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: EMAIL });
    if (existingAdmin) {
      console.log(`Admin with email ${EMAIL} already exists.`);
      process.exit(0);
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(PASSWORD, salt);

    const newAdmin = new Admin({
      email: EMAIL,
      password: hashedPassword,
    });

    await newAdmin.save();
    console.log('--------------------------------------------------');
    console.log('ADMIN CREATED SUCCESSFULLY!');
    console.log(`Email: ${EMAIL}`);
    console.log(`Password: ${PASSWORD}`);
    console.log('--------------------------------------------------');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seed();
