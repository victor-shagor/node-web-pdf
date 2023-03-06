import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, DATABASE_NAME } = process.env;

const connectToDatabase = async () => {
  const options = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`);
};

export { connectToDatabase };
