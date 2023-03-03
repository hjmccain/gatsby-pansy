import React, { Dispatch, useEffect, useState } from "react";
import Layout from "../components/layout";
import type { Stripe } from "stripe";
import Image from "next/Image";
import Link from "next/Link";
import Product from "./[product]";
// import getProducts from "../api/products";

export type ProductWithPrice = Stripe.Product & { price: Stripe.Price };
export type ProductWithPriceAndQty = ProductWithPrice & { quantity: number };

async function handleGetProducts() {
  const res = await fetch("/api/products", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (res) {
    const productsWithPrices = await res.json();
    return productsWithPrices;
  } else {
    console.error("error redirecting");
    return [];
  }
}

// export async function getStaticProps() {
//   const res = handleGetProducts();
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Array<ProductWithPrice>>([]);
  const [productSelected, setSelectedProduct] =
    useState<ProductWithPrice | null>(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.toString());
  });

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const productsWithPrices = await handleGetProducts();
      setLoading(false);

      setProducts(productsWithPrices);
      getLocation(productsWithPrices, location, setSelectedProduct);
    };

    getProducts();
  }, [location]);

  return (
    <Layout>
      <div className="w-screen">
        {productSelected ? (
          <Product
            product={productSelected}
            image1={`/products/images/${productSelected.id}.jpg`}
            image2={`/products/images/${productSelected.id}.jpg`}
          />
        ) : (
          <div className="mt-12 font-body text-center lg:text-left">
            {loading && !products.length && (
              <div className="text-white text-2xl font-serif flex justify-center animate-pulse">
                <p className="mt-8">
                  ...querying database for pansy products...
                </p>
              </div>
            )}
            <div className="grid grid-cols-[repeat(auto-fill,_300px)] sm:grid-cols-[repeat(auto-fill,_400px)] gap-2 max-w-[300px] sm:max-w-[400px] min-[824px]:max-w-[808px] xl:max-w-[1216px] min-[2200px]:max-w-[1624px] mx-auto">
              {products.map((product) => {
                const image1 = `/products/images/${product.id}.jpg`;
                const image2 = `/products/images/${product.id}-alt.jpg`;
                const price = product.price.unit_amount
                  ? product.price.unit_amount / 100
                  : null;

                if (price) {
                  return (
                    <ProductBlock
                      active={product.active}
                      key={product.id}
                      product={product.id}
                      title={product.name}
                      price={price}>
                      <div className="grid h-full w-full">
                        {image2 && (
                          <Image
                            src={image2}
                            alt=""
                            className="object-cover row-start-1 col-start-1 sm:h-[400px] h-[300px] sm:w-[400px] w-[300px]"
                            width={400}
                            height={400}
                          />
                        )}
                        {image1 && (
                          <Image
                            src={image1}
                            alt=""
                            className="object-cover row-start-1 col-start-1 hover:opacity-0 transition-opacity sm:h-[400px] h-[300px] sm:w-[400px] w-[300px]"
                            width={400}
                            height={400}
                          />
                        )}
                        {!image1 && !image2 && (
                          <Image
                            src="/products/images/prod_NJvXkt0lcEKDQj-alt.jpg"
                            alt="placeholder"
                            className="object-cover sm:h-[400px] h-[300px] sm:w-[400px] w-[300px]"
                            width={400}
                            height={400}
                          />
                        )}
                      </div>
                    </ProductBlock>
                  );
                }
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const ProductBlock = ({
  active,
  product,
  title,
  price,
  children,
}: {
  active: boolean;
  product: string;
  title: string;
  price: number | string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      key={product}
      href={`?product=${product}`}
      className="group font-serif h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
      {children}
      <div className="text-xl flex justify-between relative bottom-10 px-4 py-2 group-hover:opacity-90 opacity-0 transition-opacity bg-white">
        <p className="italic">{title}</p>
        {active ? <p>${price}</p> : <p>SOLD OUT</p>}
      </div>
    </Link>
  );
};

const getLocation = (
  products: any,
  location: string,
  setSelectedProduct: Dispatch<any>
) => {
  if (location && typeof window !== "undefined") {
    const url = new URL(location);
    const product = url.searchParams.get("product");

    if (product) {
      try {
        const productWithPrice = products.find((el: any) => el.id === product);
        if (!productWithPrice) {
          throw new Error("product not found");
        }
        setSelectedProduct(productWithPrice);
      } catch (err) {
        console.error(err);
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
    }
  }
};

export const Head = () => <title>Pansy Press Shop</title>;

export default Shop;
