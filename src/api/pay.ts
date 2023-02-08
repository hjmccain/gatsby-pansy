import { randomUUID } from "crypto";
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { Client, Environment } from "square";

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const pay = async (req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) => {
  console.log("body-ody-ody", req.body);
  const { orderId, amountMoney } = req.body;

  if (req.method === "POST") {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: "USD",
        amount: BigInt(amountMoney),
      },
      orderId,
    });

    res.status(200).json(result);
  } else {
    res.status(500).send("Error creating payment.");
  }
};

export default pay;
