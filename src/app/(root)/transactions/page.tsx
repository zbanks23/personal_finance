import { transactions } from "@/lib/placeholder-data";
import TransactionList from "@/components/ui/transactionList";
import { connectToDB } from "@/lib/data";

export default async function TransactionsPage() {
  const client = await connectToDB(); // The error in the terminal came from this, but its not too bad. Will fix later on.

  return (
    <div>
      {client && <p className="text-green-500">Connected to database</p>}
      <h1 className="flex justify-center text-indigo-600 text-2xl font-bold mb-4">
        Transactions History
      </h1>
      <div className="w-3/4">
        <table className="text-white w-full">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amounts</th>
          </tr>
          {transactions.map((transaction) => (
            <TransactionList key={transaction.id} {...transaction} />
          ))}
        </table>
      </div>
      <div className="w-fit"></div>
    </div>
  );
}
