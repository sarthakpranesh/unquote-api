import { getRandomQuote } from "../controller/quotes.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/getQuote", async ({response}: {response: any}) => {
  const quote = await getRandomQuote();
  response.body = {
    quote,
    success: true,
  };
});

export default router;
