import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const { DATABASE_URL, DATABASE_NAME } = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  await mongoose.connect(`${DATABASE_URL}/${DATABASE_NAME}`, options);
};

export { connectToDatabase };
