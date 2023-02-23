import { GatsbyFunctionResponse } from "gatsby";
import type { Stripe } from "stripe";

const stripe = require("stripe")(process.env.STRIPE_ACCESS_TOKEN);

async function getProducts(_: any, res: GatsbyFunctionResponse) {
  const products = await stripe.products.list();

  if (products) {
    try {
      const productsWithPrices = await Promise.all(
        products.data.map(async (product: Stripe.Product) => {
          const price = await stripe.prices.retrieve(product.default_price);

          if (price) {
            return { ...product, price };
          }

          throw new Error(`Price not found for product id ${product.id}`);
        })
      );

      res.status(200).json(productsWithPrices);
    } catch (err) {
      console.error(err);
      res.status(404).send(err);
    }
  } else {
    res.status(500).send("Error fetching products.");
  }
}

export default getProducts;
