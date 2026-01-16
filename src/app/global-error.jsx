"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-5xl font-bold text-error mb-2">Oops!</h1>

        <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>

        <p className="text-gray-500 mb-6">
          An unexpected error occurred. Please try again or return home.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button onClick={reset} className="btn btn-primary">
            Try Again
          </button>

          <Link href="/" className="btn btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
