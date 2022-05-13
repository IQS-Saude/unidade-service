export interface Response {
  success: boolean;
}

export interface ResponseSuccess<T> extends Response {
  data: T;
}

export interface ResponseError<T> extends Response {
  error: T;
}
