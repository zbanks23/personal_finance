import React from "react";
import { connectToDB } from "@/lib/data";

export default async function transactions() {
  const client = await connectToDB();

  return (
    <div className="w-3/4">
      <h1 className="text-indigo-600 text-2xl font-bold mb-4">
        Transactions History
      </h1>
      {client && <p className="text-green-500">Connected to database</p>}
    </div>
  );
}
