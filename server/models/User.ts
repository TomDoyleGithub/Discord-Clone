import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

  const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true
    },
    username : {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    birthday: {
      type: String,
      required: true
    }
  });

  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.set('password', bcrypt.hash(this.get('password'), saltRounds))
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.get('password'));
  };
  
  export default model ('User', userSchema);