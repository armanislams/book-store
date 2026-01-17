import Link from 'next/link';
import React from 'react'

export default function Sidebar() {
    const links = (
      <>
        <li>
          <Link
            href={"/dashboard"}
            className="hover:bg-primary hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/add-book"}
            className="hover:bg-primary hover:text-white"
          >
            Add a Book
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/profile"}
            className="hover:bg-primary hover:text-white"
          >
            Profile
          </Link>
        </li>
      </>
    );
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
    </div>
  );
}
