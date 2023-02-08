import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { Client, Environment } from "square";

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { ordersApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const order = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  console.log("body-ody-ody - calculate order", req.body);

  if (req.method === "POST") {
    const { result } = await ordersApi.createOrder({
      order: req.body.order,
    });

    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send("Error creating order.");
  }
};

export default order;
