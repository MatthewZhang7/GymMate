import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    profilePicturePath: {
      type: String,
      default: '',
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    location: String,
    sex: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    height: String,
    dob: {
      type: Date,
    },
    biography: String,
    goals: [
      {
        type: {
          type: String,
          enum: [
            'Weight Loss',
            'Muscle Gain',
            'Endurance',
            'Strength',
            'Flexibility',
            'Other',
          ],
        },
        targetDate: Date,
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
