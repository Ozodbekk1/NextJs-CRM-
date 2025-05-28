/** @format */

import { z } from "zod";

export const otpSchema = z.object({
  otp: z
    .string()
    .min(5, { message: "OTP must be 5 digits long" })
    .max(5, { message: "OTP must be 5 digits long" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
});
