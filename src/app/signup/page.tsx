"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#dfe9f3] to-[#a6e3e9] p-6">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-3xl p-8 md:p-12 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200">
        
        {/* Image Section */}
        <div className="hidden md:block w-1/2">
          <Image src="/images/signup-img.avif" alt="Sign In" width={320} height={400} className="rounded-lg shadow-lg" />
        </div>

        {/* Signup Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Create an Account</h2>
          
          <form className="w-full space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-teal-500 focus:ring focus:ring-teal-200 transition"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-[#32ecc4] p-3 text-white font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account? 
            <Link href="/Login" className="text-teal-600 font-semibold hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
