import { GatsbyFunctionResponse } from "gatsby";
import type { Stripe } from "stripe";

const stripe = require("stripe")(
  "sk_test_51MZHdjEscoTdn5s3iR39TMU1t2IKxyuUb4dli6pd03Q0262fRZ222Hlxglf5Y3a1HIECoqdSBj0ghIqWSkpMG3p200z4FNLL9f"
);

async function getProducts(_: any, res: GatsbyFunctionResponse) {
  const products = await stripe.products.list();

  if (products) {
    // console.log(products);

    // products.data.forEach((p) => console.log(p));

    // res.status(200).json(products);

    const productsWithPrices = await Promise.all(
      products.data.map(async (product: Stripe.Product) => {
        const price = await stripe.prices.retrieve(product.default_price);
        console.log(price);

        if (price) {
          return { ...product, price };
        }
      })
    );

    console.log(productsWithPrices);

    res.status(200).json(productsWithPrices);
  } else {
    res.status(500).send("Error fetching products.");
  }
}

export default getProducts;
