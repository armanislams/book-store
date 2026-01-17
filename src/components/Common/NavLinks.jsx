import Link from "next/link";
import React from "react";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link href={"/books"} className="hover:bg-primary hover:text-white">
          All Books
        </Link>
      </li>
      <li>
        <Link href={"/blog"} className="hover:bg-primary hover:text-white">
          Blogs
        </Link>
      </li>
      <li>
        <Link href={"/dashboard"} className="hover:bg-primary hover:text-white">
          Dashboard
        </Link>
      </li>
    </>
  );
}
