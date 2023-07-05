export interface AuthErrorJsonPayload {
  code: string;
  message: string;
}

export interface AuthErrorConstructorPayload {
  code?: string;
  message?: string;
}