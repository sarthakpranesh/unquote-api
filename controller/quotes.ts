import client from "../config/mongo.ts";
const db = client.database("quotes");
const quotes = db.collection("quotes");

export const GetQuotesFromDb = async () => {
  return await quotes.find({});
}

export const getRandomQuote = async () => {
  let [randomSelect, q] = await Promise.all([
    Math.floor(Math.random() * 12017),
    GetQuotesFromDb(),
  ]);
  return q[randomSelect];
}

export const getRandomQuoteList = async () => {
  let [randomSelect, q] = await Promise.all([
    Math.floor(Math.random() * 12017),
    GetQuotesFromDb(),
  ]);
  return q.slice(randomSelect, randomSelect + 5);
}

export const getQuoteById = async (oid: string) => {
  const quote = await quotes.findOne({ _id: { "$oid": oid }});
  return quote;
}
