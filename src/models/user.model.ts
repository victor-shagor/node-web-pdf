import mongoose, { Schema, Document, Model } from 'mongoose';

// type UserDocument = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// };

// type UserInput = {
//   firstName: UserDocument['firstName'];
//   lastName: UserDocument['lastName'];
//   email: UserDocument['email'];
//   phoneNumber: UserDocument['phoneNumber'];
// };

// const userSchema = new Schema(
//   {
//     firstName: {
//       type: Schema.Types.String,
//       required: true,
//     },
//     lastName: {
//       type: Schema.Types.String,
//       required: true,
//     },
//     email: {
//       type: Schema.Types.String,
//       required: true,
//       unique: true,
//       index: true,
//     },
//     phoneNumber: {
//       type: Schema.Types.String,
//       required: true,
//     },
//   },
//   {
//     collection: 'store_users'
//   },
// );

const userSchema = new Schema({
  firstName: {
          type: Schema.Types.String,
          required: true,
        },
        lastName: {
          type: Schema.Types.String,
          required: true,
        },
})

const User = mongoose.model('User', userSchema);

export { User };
