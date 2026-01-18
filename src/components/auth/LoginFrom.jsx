"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { GoogleBtn } from "./GoogleBtn";


export default function LoginPage() {
  const params = useSearchParams();
  const router = useRouter();
  const callback = params.get("callbackUrl") || "/books";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value.toLocaleLowerCase();
    const password = form.password.value.toLocaleLowerCase();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callback,
    });
    if (!result.ok) {
      Swal.fire(
        "Error",
        "Email password not Matched . Try Google Login / Register",
        "error"
      );
    } else {
      Swal.fire("Success", "Welcome to Boi-Poka", "success");
      router.push(callback);
    }

   setLoading(false)
  };
  const handleDemoLogin = async () => {
    setLoading(true)
    const email = process.env.NEXT_PUBLIC_DEMO_USER_EMAIL;
    const password = process.env.NEXT_PUBLIC_DEMO_USER_PASS;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });
    // console.log(result);
    
    if (!result.ok) {
      Swal.fire(
        "Error",
        "Email password not Matched . Try Google Login / Register",
        "error"
      );
    } else {
      Swal.fire("Success", "Welcome to Boi-Poka", "success");
      router.push(callback);
    }

   setLoading(false)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-base-100 rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <p className="text-center text-gray-500 mt-1 mb-6">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

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

          <div className="text-right">
            <Link href="/forgot-password" className="text-sm link link-primary">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-base"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div>
          <button onClick={handleDemoLogin} disabled={loading} className="btn w-full text-base my-3 btn-primary">Demo Login</button>
        </div>

        {/* Divider */}
        <div className="divider my-6">OR</div>

        {/* Google */}
        <GoogleBtn/>

        {/* Register */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="link link-primary">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
