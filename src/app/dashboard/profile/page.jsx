"use client";

import { useSession } from "next-auth/react";

export default function ProfileClient() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-error">Not logged in</p>;
  }

  return (
    <div className="card bg-gray-100 shadow-lg p-6 min-h-[70vh] max-w-md mx-auto flex justify-center items-center">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>

      <p>
        <span className="text-gray-500">Name:</span>{" "}
        {session.user.name || "N/A"}
      </p>

      <p>
        <span className="text-gray-500">Email:</span> {session.user.email}
      </p>
    </div>
  );
}
