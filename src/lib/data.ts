import { createClient } from "@vercel/postgres";

export async function connectToDB() {
    const client = createClient();

    try {
        await client.connect();
        console.log('Connected to database');
        return client;
    } catch (error) {
        console.error('Error connecting to database', error);
        throw error;
    }
}