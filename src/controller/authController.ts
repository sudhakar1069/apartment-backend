import { asyncHandler } from "../middleware/asyncHandler.js";
import { UserRepository } from "../repository/userRepository.js";
import { AuthService } from "../service/authService.js";
import type { Request, Response } from "express";
import { successResponse } from "../utils/response.js";
const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

// REGISTER
export const register = asyncHandler(async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    // res.status(201).json(user);
    return successResponse(res,"User registration successfull",user,201)
    
});

// LOGIN
export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const tokens = await authService.login(email, password);
    // res.json(tokens);
    return successResponse(res,"Login successfull",tokens,200);
});

// LOGOUT
// export const logout = asyncHandler(async (req: any, res: Response) => {
//     const result = await authService.logout(req.user.id);
//     res.json(result);
// });