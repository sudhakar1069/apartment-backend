import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
export const apartmentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  city: z.string().min(4, "City is required"),
  area: z.string().min(2, "Area is required"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  noOfFlats: z.coerce.number().int().positive("Must be a positive integer"),
  ownerName: z.string().min(1, "Owner name is required"),
  contactNumber: z.string()
    .min(10, "Mobile number should be 10 digits")
    .max(10, "Mobile number is too long"),
  email: z.string().email("Invalid email format"),
  image:z.any().optional()
})