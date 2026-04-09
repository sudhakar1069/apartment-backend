import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/response.js";

export const errorHandler = (err:any, req:Request, res:Response, next:NextFunction) => {
//   console.error(err);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//     data: null,
//     error: err.stack || null,
//   });
return errorResponse(res,err.message||"internal server error",err,err.status||500)
};
