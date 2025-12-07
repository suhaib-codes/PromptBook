import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: false, // Optional for Google-only users
  },
  authProvider: {
    type: String,
    enum: ['google', 'credentials', 'both'],
    default: 'credentials',
  }
});

const User = models.User || model("User", UserSchema);

export default User;