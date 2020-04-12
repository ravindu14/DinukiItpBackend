import { Request, Response } from "express";

import User, { IUser } from "../models/User";
import {
  signUpValidation,
  signInValidation,
} from "../libs/validations/userValidation";
import jwt from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {
  // Validation
  const { error } = signUpValidation(req.body);
  if (error)
    return res.status(400).json({
      success: false,
      data: {
        errorCode: 400,
        errorMessage: error.message,
      },
    });

  // Email Validation
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).json({
      success: false,
      data: {
        errorCode: 400,
        errorMessage: "Email already exists",
      },
    });

  // Saving a new User
  try {
    const newUser: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      employeeNumber: req.body.employeeNumber,
      gender: req.body.gender,
      role: req.body.role,
    });
    newUser.password = await newUser.encryptPassword(newUser.password);
    const savedUser = await newUser.save();

    const token: string = jwt.sign(
      { _id: savedUser._id },
      process.env["TOKEN_SECRET"] || "",
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    // res.header('auth-token', token).json(token);
    res.header("auth-token", token).json({
      success: true,
      data: {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        employeeNumber: savedUser.employeeNumber,
        gender: savedUser.gender,
        role: savedUser.role,
      },
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      data: {
        errorCode: 500,
        errorMessage: e,
      },
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { error } = signInValidation(req.body);
  if (error)
    return res.status(400).json({
      success: false,
      data: {
        errorCode: 400,
        errorMessage: error,
      },
    });
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(400).json({
      success: false,
      data: {
        errorCode: 400,
        errorMessage: "Email or Password is wrong",
      },
    });
  const correctPassword = await user.validatePassword(req.body.password);
  if (!correctPassword)
    return res.status(400).json({
      success: false,
      data: {
        errorCode: 400,
        errorMessage: "Invalid Password",
      },
    });

  // Create a Token
  const token: string = jwt.sign(
    { _id: user._id },
    process.env["TOKEN_SECRET"] || "",
    {
      expiresIn: 60 * 60,
    }
  );
  res.header("auth-token", token).json({
    success: true,
    data: { token, user },
  });
};

export const profile = async (req: Request, res: Response) => {
  const user = await User.findById(req.userId, { password: 0 });
  if (!user) {
    return res.status(404).json("No User found");
  }
  res.status(200).json({ success: true, data: user });
};
