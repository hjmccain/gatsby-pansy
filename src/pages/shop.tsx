import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Stripe } from "stripe";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import findImage from "../helpers/findImage";

export type ProductWithPrice = Stripe.Product & { price: Stripe.Price };

const Shop = () => {
  const [products, setProducts] = useState<Array<ProductWithPrice>>([]);
  const [productSelected, setSelectedProduct] =
    useState<ProductWithPrice | null>(null);
  const location = window.location.toString();
  const { allFile } = useStaticQuery(graphql`
    query imageQuery {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    handleGetProducts(setProducts);
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

  //

  return (
    <Layout>
      <div className="w-screen">
        {productSelected ? (
          <ProductDetails product={productSelected} />
        ) : (
          <div className="mt-12 font-body gap-x-10">
            {/* <div className="mt-12 grid grid-cols-[repeat(4,_minmax(0,_1fr))] font-body gap-x-10"> */}
            {products.map((product) => {
              const image1 = findImage(allFile, product.id);
              const image2 = findImage(allFile, `${product.id}-alt`);
              const price = product.price.unit_amount
                ? product.price.unit_amount / 100
                : null;

              if (price) {
                return (
                  <ProductBlock
                    key={product.id}
                    product={product.id}
                    title={product.name}
                    price={price}>
                    <div className="grid h-full w-full">
                      {image2 && (
                        <GatsbyImage
                          image={image2}
                          alt=""
                          className="object-cover row-start-1 col-start-1"
                        />
                      )}
                      {image1 && (
                        <GatsbyImage
                          image={image1}
                          alt=""
                          className="object-cover row-start-1 col-start-1 hover:opacity-0 transition-opacity"
                        />
                      )}
                      {!image1 && !image2 && (
                        <StaticImage
                          src="../assets/images/prod_NJvXkt0lcEKDQj-alt.jpg"
                          alt="placeholder"
                          className="object-cover"
                        />
                      )}
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
}) => {
  const [productDimensions, setProductDimensions] = useState(400);

  return (
    <button
      key={product}
      onClick={() => navigate(`?product=${product}`)}
      style={{
        width: `${productDimensions}px`,
        height: `${productDimensions}px`,
      }}
      className="group mx-[18px]">
      {children}
      <div className="text-xl flex justify-between relative bottom-10 px-4 py-2 group-hover:opacity-90 opacity-0 transition-opacity bg-white">
        <p className="italic">{title}</p>
        <p>${price}</p>
      </div>
    </button>
  );
};

const ProductDetails: React.FC<{ product: ProductWithPrice }> = ({
  product,
}: {
  product: ProductWithPrice;
}) => {
  const [cart, updateCart] = useLocalStorage("cart", {} as any);
  const handleUpdateCart = () => {
    const current = cart[product.id];

    if (current) {
      const updated = {
        ...cart,
        [product.id]: { ...product, quantity: current.quantity + 1 },
      };

      updateCart(updated);
    } else {
      updateCart({ ...cart, [product.id]: { ...product, quantity: 1 } });
    }
  };

  return (
    <div className="flex">
      <h1>{product.name}</h1>
      <button onClick={handleUpdateCart}>Add this item to your cart</button>
    </div>
  );
};

async function handleGetProducts(
  setProducts: React.Dispatch<Array<ProductWithPrice>>
) {
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

export const Head = () => <title>Pansy Press Shop</title>;

export default Shop;
