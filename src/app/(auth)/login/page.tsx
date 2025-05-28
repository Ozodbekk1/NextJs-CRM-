/** @format */

"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginFormValues } from "../schemas/loginSchema";
import { Checkbox } from "@/components/ui/checkbox";
import icon from "../../../../public/img/logo.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Submitted data:", data);

    if (data.email && data.password) {
      toast.success("LoggedIn successful");
      router.push("/");
      localStorage.setItem("userEmail", data.email);
    }
  };

  const router = useRouter();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full bg-violet-100 p-3">
            <Image alt="icon" src={icon} width={300} height={300} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Welcome 👋</h1>
          <p className="text-gray-400 text-lg">Please login here</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 bg-white shadow-md rounded-xl w-full max-w-md p-6 space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-500 mb-1">
              Email Address
            </label>
            <Input
              type="email"
              required
              {...register("email")}
              className="w-full h-13 px-4 py-3 border border-violet-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 "
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-1">Password</label>
            <Input
              type="password"
              required
              {...register("password")}
              className="w-full h-13 px-4 py-3 border border-violet-500 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center  space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex"
              >
                Remember Me
              </label>
            </div>
            <Link href={"/forgotPassword"} className="text-violet-500">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full h-13 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-2xl font-semibold transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
