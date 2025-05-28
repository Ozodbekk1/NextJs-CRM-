/** @format */
"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import { useState } from "react";
import { otpSchema } from "../schemas/otpSchema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const OTPverify = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = otpSchema.safeParse({ otp });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    // console.log("OTP is valid:", result.data.otp);
    router.push("/");
    toast.success("Password updated Successfully!");
  };

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
              Enter OTP
            </h1>
            <p className='text-gray-500 mt-2'>
              We have share a code of your registered email address <br />
            </p>
            <p className='text-cyan-400'>robertallen@example.com</p>
          </div>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <InputOTP
              maxLength={5}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={otp}
              onChange={(value) => {
                setOtp(value);
              }}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className='w-14 h-14 rounded-2xl' />
                <InputOTPSlot index={1} className='w-14 h-14 rounded-2xl m-2' />
                <InputOTPSlot index={2} className='w-14 h-14 rounded-2xl' />
                <InputOTPSlot index={3} className='w-14 h-14 rounded-2xl m-2' />
                <InputOTPSlot index={4} className='w-14 h-14 rounded-2xl' />
              </InputOTPGroup>
            </InputOTP>

            <button
              type='submit'
              className='w-full h-13 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-2xl font-semibold transition'>
              Verify
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OTPverify;
