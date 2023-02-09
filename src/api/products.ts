import { GatsbyFunctionResponse } from "gatsby";
import type { Stripe } from "stripe";

const stripe = require("stripe")(
  "sk_test_51MZHdjEscoTdn5s3iR39TMU1t2IKxyuUb4dli6pd03Q0262fRZ222Hlxglf5Y3a1HIECoqdSBj0ghIqWSkpMG3p200z4FNLL9f"
);

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
      res.status(404).send(err);
    }
  } else {
    res.status(500).send("Error fetching products.");
  }
}

export default getProducts;
