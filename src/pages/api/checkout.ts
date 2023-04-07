const stripe = require("stripe")(process.env.STRIPE_ACCESS_TOKEN);

const checkout = async (req: any, res: any) => {
  const lineItems = req.body.lineItems;
  console.log(lineItems);

  if (req.method === "POST" && lineItems) {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: { amount: 0, currency: "usd" },
            display_name: "Free shipping",
          },
        },
      ],
      shipping_address_collection: { allowed_countries: ["US", "CA"] },
      mode: "payment",
      success_url: `${process.env.ROOT_URL}/shop/?success=true`,
      cancel_url: `${process.env.ROOT_URL}/shop/?canceled=true`,
      // success_url: `${YOUR_DOMAIN}?success=true`,
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
