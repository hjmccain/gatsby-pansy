import { randomUUID } from "crypto";
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { Client, Environment } from "square";

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    "EAAAEDRJVuTw-11TRvObEfF9-tz3qyURPzLZXP3Htuz3YyN4ETkEyZNerM0ACgA_",
  environment: Environment.Sandbox,
});

const paymentHandler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  console.log("hello there!");

  if (req.method === "POST") {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: "USD",
        amount: BigInt(100),
      },
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send("Error creating payment.");
  }
};

export default paymentHandler;
