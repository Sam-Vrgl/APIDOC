import { Request, Response, NextFunction } from "express";
import { UNKNOWN_ERROR, TRACKMANIA_API_ERROR } from "../constants/errorCodes";
import { UNKNOWN_ERROR_MESSAGE } from "../constants/errorMessage";
import { CustomError } from "../errors/CustomError";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
  console.error(err.stack);

  if(err instanceof CustomError){
    res.status(500).json({error: err.message, errorCode: TRACKMANIA_API_ERROR});
    }else {
      res.status(500).json({error : UNKNOWN_ERROR_MESSAGE, errorCode: UNKNOWN_ERROR})
    }
}