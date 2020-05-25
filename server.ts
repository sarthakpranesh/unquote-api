import { Application } from "https://deno.land/x/oak/mod.ts";
import "./config/mongo.ts";
import GetQuote from "./route/getQuote.ts";

const envPORT = Deno.env.get("PORT");
const port = Number(envPORT);

const app = new Application();

app.use(async (context: any, next: Function) =>{
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(`${context.request.method} ${context.request.url} - ${rt}`);
});

app.use(GetQuote.routes());
app.use(GetQuote.allowedMethods());

console.log(`Listening on port ${port}...`);

await app.listen({ port });
