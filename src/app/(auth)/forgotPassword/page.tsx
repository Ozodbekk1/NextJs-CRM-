/** @format */

"use client";

import Link from "next/link";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordFormValues,
} from "../schemas/forgotPassword";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    console.log("Submitted data:", data);

    if (data.email) {
      toast.success("Sent successfully");
      router.push("/OTPverify");
    }
  };

  const router = useRouter();

  return (
    <>
      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='w-full max-w-md p-8 rounded-2xl space-y-6'>
          <Link
            href='/login'
            className='flex items-center text-blue-600 text-2xl hover:underline'>
            <ChevronLeftIcon className='w-9 h-9 mr-1' />
            Back
          </Link>

          <div>
            <h1 className='text-3xl font-semibold mb-4 text-gray-800'>
              Forgot Password
            </h1>
            <p className='text-gray-500 mt-2'>
              Enter your registered email address. We’ll send you a code <br />
              to reset your password.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <label className='px-1.5'>Email Address</label>
            <Input
              type='email'
              {...register("email")}
              required
              placeholder='Enter your email'
              className='w-full h-13 px-4 py-3 border border-violet-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500'
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.email.message}
              </p>
            )}

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full h-13 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-2xl font-semibold transition'>
              {isSubmitting ? "Sending" : "Send OTP"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
