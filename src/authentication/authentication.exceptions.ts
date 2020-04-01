import HttpException from "../shared/exceptions/HttpException";

export class UserNotFoundException extends HttpException {
  constructor() {
    super(404, "User not found", false);
  }
}

export class WrongCredentialsException extends HttpException {
  constructor() {
    super(400, "Your email or password is wrong", false);
  }
}

export class UserAlreadyExistsException extends HttpException {
  constructor(email: string, username: string) {
    super(
      400,
      `User with email ${email} or username ${username} is already exists`,
      false
    );
  }
}
