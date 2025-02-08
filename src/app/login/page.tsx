"use client";

import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#e9ecef] to-[#32ecc4] p-4">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl p-8 md:p-12 bg-white shadow-xl rounded-lg transition-transform duration-300 hover:scale-105">

        <div className="hidden md:flex w-1/2 justify-center">
          <Image
            src="/images/login-image.webp"
            alt="Login Image"
            height={400}
            width={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <Link
            href="/"
            className="flex items-center justify-center w-full h-12 bg-[#32ecc4] text-white font-medium text-base uppercase rounded-md hover:bg-[#027a8a] transition duration-300 shadow-md"
          >
            Back to Home
            <svg
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </Link>

          <SignedIn>
            <div className="mt-6 text-center">
              <UserButton afterSignOutUrl="/" />
              <h1 className="mt-4 text-3xl font-semibold text-[#32ecc4]">
                Welcome back!
              </h1>
              <p className="mt-2 text-gray-600 text-lg">
                Use coupon{" "}
                <span className="text-[#32ecc4] font-bold">DISCOUNT</span> to get a
                10% discount
              </p>
            </div>
          </SignedIn>

          <SignedOut>
            <h2 className="mb-6 text-center text-2xl font-semibold text-gray-700">
              Login
            </h2>
            <form className="w-full space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-sm"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </form>
            <div className="flex justify-center w-full mt-5">
              <div className="w-full rounded-md bg-[#32ecc4] p-3 text-white text-center font-medium hover:bg-[#027a8a] transition duration-300 cursor-pointer shadow-lg">
                <SignInButton mode="modal" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/SignUp" className="text-[#32ecc4] font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
