import React from 'react'

export default function Card() {
  return (
    <div className="grid md:grid-cols-3 gap-6 ">
      <div className="card bg-gray-100 shadow p-6">
        <h3 className="font-semibold">Total Books</h3>
        <p className="text-3xl mt-2">1,245</p>
      </div>

      <div className="card bg-gray-100 shadow p-6">
        <h3 className="font-semibold">Orders</h3>
        <p className="text-3xl mt-2">320</p>
      </div>

      <div className="card bg-gray-100 shadow p-6">
        <h3 className="font-semibold">Users</h3>
        <p className="text-3xl mt-2">892</p>
      </div>
    </div>
  );
}
