import { TRACKMANIA_API_ERROR } from "../constants/errorCodes";
import { CustomError } from "./CustomError";

export class ApiError extends CustomError {
  constructor(message: string){
    super(message, TRACKMANIA_API_ERROR);
    this.name = "ApiError";
  }
}