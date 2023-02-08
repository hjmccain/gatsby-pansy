import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Stripe } from "stripe";

type ProductWithPrice = Stripe.Product & { price: Stripe.Price };

const Shop = () => {
  const [products, setProducts] = useState<Array<ProductWithPrice>>([]);
  const [productSelected, setSelectedProduct] =
    useState<ProductWithPrice | null>(null);
  const location = window.location.toString();

  console.log(products);

  useEffect(() => {
    async function handleGetProducts() {
      const res = await fetch("/api/products", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (res) {
        const productsWithPrices = await res.json();
        setProducts(productsWithPrices);
      } else {
        console.error("error redirecting");
      }
    }

    handleGetProducts();
  }, []);

  useEffect(() => {
    const url = new URL(location);
    const product = url.searchParams.get("product");

    if (product) {
      try {
        const productWithPrice = products.find((el) => el.id === product);
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
  }, [location]);

  return (
    <Layout>
      <div className="w-screen">
        {productSelected ? (
          <ProductDetails product={productSelected} />
        ) : (
          <div className="mt-12 grid grid-cols-3 font-body gap-x-10">
            {products.map((product) => {
              const price = product.price.unit_amount
                ? product.price.unit_amount / 100
                : null;

              if (price) {
                return (
                  <ProductBlock
                    product={product.id}
                    title={product.name}
                    price={price}>
                    <div className="grid">
                      <StaticImage
                        src="../assets/images/whats-not-there.jpg"
                        alt=""
                        className="object-cover h-[475px] row-start-1 col-start-1"
                      />
                      <StaticImage
                        src="../assets/images/all-these-boys.jpg"
                        alt=""
                        className="object-cover h-[475px] hover:opacity-0 transition-opacity row-start-1 col-start-1"
                      />
                    </div>
                  </ProductBlock>
                );
              }
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

const ProductBlock = ({
  product,
  title,
  price,
  children,
}: {
  product: string;
  title: string;
  price: number | string;
  children: React.ReactNode;
}) => (
  <button
    key={product}
    onClick={() => navigate(`?product=${product}`)}
    className="group">
    {children}
    <div className="text-xl flex justify-between relative bottom-10 px-4 py-2 group-hover:opacity-90 opacity-0 transition-opacity bg-white">
      <p className="italic">{title}</p>
      <p>${price}</p>
    </div>
  </button>
);

const ProductDetails: React.FC<{ product: ProductWithPrice }> = ({
  product,
}: {
  product: ProductWithPrice;
}) => {
  const [cart, updateCart] = useLocalStorage("cart", {});
  const handleUpdateCart = () => updateCart({ ...cart, other: 1 });

  return (
    <div className="flex">
      <h1>{product.name}</h1>
      <button onClick={handleUpdateCart}>Add this item to your cart</button>
    </div>
  );
};

export const Head = () => <title>Pansy Press Shop</title>;

export default Shop;
