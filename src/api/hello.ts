import { GatsbyFunctionResponse } from "gatsby";
import type { Stripe } from "stripe";

async function sayHello(req: any, res: any) {
  res.status(200).json({
    greeting: "hello world",
  });
}

export default sayHello;
