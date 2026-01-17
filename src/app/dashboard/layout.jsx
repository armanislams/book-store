import Sidebar from '@/components/dashboard/Sidebar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className="grid grid-cols-1 my-5 md:grid-cols-10 gap-5 min-h-screen">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-7">{children}</div>
    </div>
  );
}
