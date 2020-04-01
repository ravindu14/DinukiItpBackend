export interface User {
  _id: string;
  employeeNumber: string;
  username: string;
  email: string;
  password: string;
  gender: string;
}

export interface TokenData {
  key: string;
  expiresIn: number;
}

export interface DataInToken {
  _id: string;
  username: string;
}
