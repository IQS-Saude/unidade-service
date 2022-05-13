import {
  ResponseError,
  ResponseSuccess,
} from '@/app/dtos/response/response.interface';

export abstract class BaseController {
  public success(): ResponseSuccess<null>;
  public success<T>(data: T): ResponseSuccess<T>;
  public success<T>(data?: T) {
    return {
      success: true,
      data,
    };
  }

  public error<T>(error: T): ResponseError<T> {
    return {
      success: false,
      error,
    };
  }
}
