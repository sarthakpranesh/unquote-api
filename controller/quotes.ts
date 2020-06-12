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
  const counter = Math.floor(12017 / 5);
  let [randomSelect, q] = await Promise.all([
    Math.floor(Math.random() * counter),
    GetQuotesFromDb(),
  ]);
  let rq = []
  for (let i = 0; i < 5; i++) {
    rq.push(q[randomSelect + (counter * i)])
  }
  return rq;
}

export const getQuoteById = async (oid: string) => {
  const quote = await quotes.findOne({ _id: { "$oid": oid }});
  return quote;
}
