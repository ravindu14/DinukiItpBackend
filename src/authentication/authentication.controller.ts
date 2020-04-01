import * as express from "express";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

import Controller from "../shared/interfaces/controller.interface";
import validationMiddleware from "../shared/middleware/validation.middleware";
import userModel from "./authentication.model";

import { JWT_SECRET } from "../shared/config/keys";
import {
  UserNotFoundException,
  UserAlreadyExistsException,
  WrongCredentialsException
} from "./authentication.exceptions";
import { User, TokenData, DataInToken } from "./authentication.interface";
import { CreateUserDto, LogInDto } from "./authentication.dto";

export default class AuthenticationController implements Controller {
  public router = express.Router();
  private user = userModel;
  private path = "/auth";

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.signUp);
  }

  private signUp = async (
    {
      body: { email, password, fistname, lastname, gender, employeeNumber }
    }: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {};
}
