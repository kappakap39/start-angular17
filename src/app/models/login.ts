export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserResponse {
  USERID: string;
  USERNAME: string;
  FIRSTNAME: string;
  LASTNAME: string;
  TEL: string;
  PASSWORD: string;
  Verification: string;
}

export interface LoginResponse {
  token: string;
  firstName: string;
  lastName: string;
  username: string;
  userResponse: UserResponse;
}
