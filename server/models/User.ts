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
      (this as any).password = await bcrypt.hash((this as any).password, saltRounds);
    }
  
    next();
  });

  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('username')) {
      const val = Math.floor(1000 + Math.random() * 9000);
      (this as any).username = await (this as any).username + `#${val}`;
    }
  
    next();
  });
  
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, (this as any).password);
  };
  
  export default model ('User', userSchema);