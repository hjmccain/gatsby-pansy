import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51MZHdjEscoTdn5s3iR39TMU1t2IKxyuUb4dli6pd03Q0262fRZ222Hlxglf5Y3a1HIECoqdSBj0ghIqWSkpMG3p200z4FNLL9f"
);

const checkout = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  const lineItems = req.body.lineItems;
  console.log(lineItems);

  if (req.method === "POST" && lineItems) {
    const session = await stripe.checkout.sessions.create({
      // line_items: [
      //   {
      //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //     price: "price_1MZHfTEscoTdn5s31lpDERlb",
      //     quantity: 1,
      //   },
      // ],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:8000/books/?success=true`,
      cancel_url: `http://localhost:8000/books/?canceled=true`,
      // success_url: `${YOUR_DOMAIN}?success=true`,
      // cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    if (!lineItems) {
      res.status(400).send("No line item payload provided.");
    }

    if (session.url) {
      res.status(200).json(session.url);
    } else {
      res.status(500).send("Error creating session.");
    }
  }
};

export default checkout;