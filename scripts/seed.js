const {db} = require("@vercel/postgres");
const { transactions } = require("../src/lib/placeholder-data.js");

async function seedTransactions(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
      // Create the "users" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS transactions (
          id UUID DEFAULT uuid_generate_v1mc() PRIMARY KEY,
          date DATE NOT NULL,
          description TEXT NOT NULL,
          category TEXT NOT NULL,
          type TEXT NOT NULL,
          amount NUMERIC NOT NULL
        );
      `;
  
      console.log(`Created "transactions" table`);
  
      // Insert data into the "transactions" table
      const insertedTransactions = await Promise.all(
        transactions.map(async (transaction) => {
          return client.sql`
          INSERT INTO transactions (date, description, category, type, amount)
          VALUES (${transaction.date}, ${transaction.description}, ${transaction.category}, ${transaction.type}, ${transaction.amount})
          ON CONFLICT (id) DO NOTHING;
        `;
        })
      );
      console.log(`Seeded ${insertedTransactions.length} transactions`);
  
      return {
        createTable,
        transactions: insertedTransactions,
      };
    } catch (error) {
      console.error("Error seeding transactions:", error);
      throw error;
    }
  }
  
  async function main() {
    const client = await db.connect();
    await seedTransactions(client);
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      err
    );
  });