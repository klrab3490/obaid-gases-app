import mongoose from 'mongoose';

export default async function connectToMondoDB() {
  const url = 'mongodb://127.0.0.1:27017/obaidgases';
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
    throw error;
  }
}