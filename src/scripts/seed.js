const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/puri-school';

async function seed() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    const AdminSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
    });

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

    const email = 'adminpurischool@gmail.com';
    const password = 'Puri@2026';

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log('Admin created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed:', error);
    process.exit(1);
  }
}

seed();
