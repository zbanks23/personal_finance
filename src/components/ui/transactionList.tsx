import React from "react";

export default function TransactionList({
  id,
  date,
  description,
  category,
  amount,
}: {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}) {
  return (
    <tr key={id} className="border border-gray-200 p-4 my-4">
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}
