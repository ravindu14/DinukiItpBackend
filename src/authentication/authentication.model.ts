import * as mongoose from "mongoose";
import { User } from "./authentication.interface";
import * as uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    lowercase: true,
    index: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    select: false
  },
  employeeNumber: {
    type: String,
    require: true,
    unique: true,
    index: true
  },
  gender: {
    type: String
  }
});

userSchema.index({
  username: "text"
});

userSchema.plugin(uniqueValidator, { message: "{VALUE} is already taken." });

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
