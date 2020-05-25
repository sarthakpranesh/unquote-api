import { MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";
const client = new MongoClient();
const mongoUser = Deno.env.get("MONGO_NAME");
const mongoPass = Deno.env.get("MONGO_PASSWORD");
client.connectWithUri(`mongodb+srv://${mongoUser}:${mongoPass}@cluster0-ope9o.mongodb.net/quotes?retryWrites=true&w=majority`);
export default client;