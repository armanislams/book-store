"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export const GoogleBtn = () => {
  const params = useSearchParams();

  const handleSignIn = async () => {
    const result = await signIn("google", {
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={handleSignIn}
        className="btn btn-outline btn-error flex-1"
      >
        <FaGoogle className="text-lg" />
        Login With Google
      </button>
    </div>
  );
};
