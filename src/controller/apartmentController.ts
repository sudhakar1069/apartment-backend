import { asyncHandler } from "../middleware/asyncHandler.js";
import type { Request, Response } from "express";
import { ApartmentService } from "../service/apartmentService.js";
import { ApartmentRepository } from "../repository/apartmentRepository.js";
import { successResponse } from "../utils/response.js";
const apartmentRepository = new ApartmentRepository();
const apartmentService = new ApartmentService(apartmentRepository);

// export const getall = asyncHandler(async (req: Request, res: Response) => {
//     const result = await apartmentService.getApartments();
//     return successResponse(res, "apartments fetched successfully", result, 200)
// });
export const getApartments = asyncHandler(async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 9;
    const filters = {
        city: req.query.city as string,
        area: req.query.area as string,
        minPrice: req.query.minPrice as string,
        maxPrice: req.query.maxPrice as string,
    }
    const apartments = await apartmentService.getApartments(filters, page, limit)
    return successResponse(res, "apartments fetched successfully", apartments, 200)
});

export const add = asyncHandler(async (req: Request, res: Response) => {
    // const image = req.file?.filename;
    const data = {
        ...req.body, image: req.file?.filename,
    };
    const result = await apartmentService.registerApartment(data)
    return successResponse(res, "apartment registered successfully", result, 201)
});

export const update = asyncHandler(async (req: any, res: Response) => {
    const result = await apartmentService.updateApartment(req.params.id, req.body)
    return successResponse(res, "apartment updated successfully", result, 200)
});

export const remove = asyncHandler(async (req: any, res: Response) => {
    const id = req.params.id;
    const result = await apartmentService.deleteApartment(id)
    return successResponse(res, "request success", result, 200)
});