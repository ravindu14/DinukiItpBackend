import HttpException from "./HttpException";

export class InvalidRequestException extends HttpException {
  constructor() {
    super(400, `Bad Request`, false);
  }
}

export class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(401, `Authentication token missing`, false);
  }
}

export class InvalidAuthenticationTokenException extends HttpException {
  constructor() {
    super(401, `Invalid authentication token`, false);
  }
}

export class UnauthorizedActionException extends HttpException {
  constructor() {
    super(403, `Unauthorized action`, false);
  }
}

export class InternalServerError extends HttpException {
  constructor() {
    super(500, `Internal server error`, false);
  }
}
