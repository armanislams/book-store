"use client";

import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { GoogleBtn } from "./GoogleBtn";

export default function RegisterPage() {
  const params = useSearchParams();
  const router = useRouter();
  const callbackUrl = params.get("callbackUrl") || "/books";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = {
      name: formData.get("name").toLocaleLowerCase(),
      email: formData.get("email").toLocaleLowerCase(),
      password: formData.get("password").toLocaleLowerCase(),
    };

    const result = await postUser(user)
    // console.log(result);
    if (result.message === 'user exist') {
      Swal.fire('Error', 'User Exist with this email, please login', 'error')
    } else if (result.acknowledged) {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callbackUrl,
      })
      if (result.ok) {
        Swal.fire("Success", "Registered successfully", "success");
        router.push(callbackUrl);
      }
    } else {
      Swal.fire("Error", "Sorry something went wrong", "error");
    }

     setLoading(false)
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Create Account</h1>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Join our book community
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              required
            />
          </div>

          

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        {/* <div className="divider my-6">OR</div> */}

        {/* Social signup */}

        {/* <GoogleBtn /> */}
        
        {/* Login link */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="link link-primary">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
