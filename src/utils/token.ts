import jwt from "jsonwebtoken";

export const AccessToken = (user: any) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "15m" }
  );
};

export const RefreshToken = (user: any) => {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );
};