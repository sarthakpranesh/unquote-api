import { getRandomQuote, getRandomQuoteList, getQuoteById } from "../controller/quotes.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/getQuote", async ({response}: {response: any}) => {
  const quote = await getRandomQuote();
  response.body = {
    quote,
    success: true,
  };
});

router.get("/getQuoteList", async ({response}: {response: any}) => {
  const quoteList = await getRandomQuoteList();
  response.body = {
    quoteList,
    success: true,
  }
})

router.get("/getQuoteById", async ({request, response}: {request: any, response: any}) => {
  const oid = request.url.search.replace("?oid=", "");
  const quote = await getQuoteById(oid);
  response.body = {
    quote,
    success: true,
  }
})

export default router;
