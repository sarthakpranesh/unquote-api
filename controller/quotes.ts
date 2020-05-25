import client from "../config/mongo.ts";
const db = client.database("quotes");
const quotes = db.collection("quotes");

export const getRandomQuote = async () => {
  let q = await quotes.find({});
  const randomSelect = Math.floor(Math.random()*q.length)
  console.log(q[randomSelect]);
  return q[randomSelect];
}