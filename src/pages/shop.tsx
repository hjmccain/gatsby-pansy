import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React, { Dispatch, useEffect, useState } from "react";
import Layout from "../components/layout";
import useLocalStorage from "../hooks/useLocalStorage";
import type { Stripe } from "stripe";
import {
  StaticImage,
  GatsbyImage,
  IGatsbyImageData,
} from "gatsby-plugin-image";
import findImage from "../helpers/findImage";
import classNames from "classnames";
// @ts-ignore
import arrow from "../assets/icons/arrow.png";

export type ProductWithPrice = Stripe.Product & { price: Stripe.Price };
export type ProductWithPriceAndQty = ProductWithPrice & { quantity: number };

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
    const getProducts = async () => {
      const productsWithPrices = await handleGetProducts();

      setProducts(productsWithPrices);
      getLocation(productsWithPrices, location, setSelectedProduct);
    };

    getProducts();
  }, []);

  useEffect(() => {
    getLocation(products, location, setSelectedProduct);
  }, [location]);

  return (
    <Layout>
      <div className="w-screen">
        {productSelected ? (
          <ProductDetails
            product={productSelected}
            image1={findImage(allFile, productSelected.id)}
            image2={findImage(allFile, `${productSelected.id}-alt`)}
          />
        ) : (
          <div className="mt-12 font-body text-center lg:text-left">
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

const ProductDetails: React.FC<{
  product: ProductWithPrice;
  image1?: IGatsbyImageData;
  image2?: IGatsbyImageData;
}> = ({
  product,
  image1,
  image2,
}: {
  product: ProductWithPrice;
  image1?: IGatsbyImageData;
  image2?: IGatsbyImageData;
}) => {
  const [selectedImage, setSelectedImage] = useState("image2");
  const [localQty, setLocalQty] = useState(1);
  const [cart, updateCart] = useLocalStorage("cart", {} as any);
  const handleUpdateCart = () => {
    const current = cart[product.id];

    if (current) {
      const updated = {
        ...cart,
        [product.id]: { ...product, quantity: current.quantity + localQty },
      };

      updateCart(updated);
    } else {
      updateCart({ ...cart, [product.id]: { ...product, quantity: localQty } });
    }
  };

  function handleSelectImage() {
    selectedImage === "image1"
      ? setSelectedImage("image2")
      : setSelectedImage("image1");
  }

  return (
    <div className="mx-12 mt-4">
      <Link
        to="/shop"
        className="uppercase text-4xl hover:opacity-70 font-serif">
        {"← "}
        <span className="text-xl">BACK</span>
      </Link>
      <div className="grid grid-cols-2 font-serif mb-0">
        <button onClick={handleSelectImage} className="grid col-span-1">
          <div
            style={{
              cursor: `url(${arrow}),auto`,
            }}
            className={classNames("col-span-1 col-start-1 row-start-1")}>
            {image1 && (
              <GatsbyImage
                image={image1}
                alt=""
                className={classNames(
                  selectedImage === "image1" ? "opacity-100" : "opacity-0",
                  "object-cover w-full h-full"
                )}
              />
            )}
          </div>
          <div
            style={{
              cursor: `url(${arrow}),auto`,
            }}
            className={classNames("col-span-1 col-start-1 row-start-1")}>
            {image2 && (
              <GatsbyImage
                image={image2}
                alt=""
                className={classNames(
                  selectedImage === "image2" ? "opacity-100" : "opacity-0",
                  "object-cover w-full h-full"
                )}
              />
            )}
          </div>
        </button>
        <div className="col-start-2 p-12 bg-primary-100 mr-12">
          <h1 className="uppercase text-4xl">{product.name}</h1>
          <h1 className="my-12">{product.description}</h1>
          <p className="col-start-1 col-span-2 self-end text-base">
            QTY:{" "}
            <button
              disabled={localQty === 1}
              onClick={() => {
                setLocalQty(localQty - 1);
              }}>
              -
            </button>{" "}
            {localQty}{" "}
            <button
              onClick={() => {
                setLocalQty(localQty + 1);
              }}>
              +
            </button>
          </p>
          <button
            className="font-sans uppercase mt-4 py-4 px-8 border-black border hover:bg-black hover:text-white bg-white"
            onClick={handleUpdateCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

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

const getLocation = (
  products: any,
  location: string,
  setSelectedProduct: Dispatch<any>
) => {
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
};

export const Head = () => <title>Pansy Press Shop</title>;

export default Shop;
