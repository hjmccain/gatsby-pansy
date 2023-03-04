// @ts-ignore
import arrow from "../assets/icons/arrow.png";

import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useLocalStorage, { getLocalStorage } from "../hooks/useLocalStorage";
import { ProductWithPrice } from "./shop";

const Product: React.FC<{
  product: ProductWithPrice | null;
  image1?: string;
  image2?: string;
}> = ({
  product,
  image1,
  image2,
}: {
  product: ProductWithPrice | null;
  image1?: string;
  image2?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState("image1");
  const [localQty, setLocalQty] = useState(1);
  const [_, updateCart] = useLocalStorage("cart", {} as any);

  if (!product) {
    // better would be to get the id from the URL and then getStaticPaths/getStaticProps
    return null;
  }

  const price = product.price.unit_amount
    ? product.price.unit_amount / 100
    : null;

  const handleUpdateCart = () => {
    const currentCart = getLocalStorage("cart");
    const current = currentCart[product.id];

    if (current) {
      const updated = {
        ...currentCart,
        [product.id]: {
          ...product,
          quantity: (current.quantity || 0) + localQty,
        },
      };

      updateCart(updated);
      setLocalQty(() => 1);
    } else {
      updateCart({
        ...currentCart,
        [product.id]: { ...product, quantity: localQty },
      });
      setLocalQty(() => 1);
    }
  };

  function handleSelectImage() {
    selectedImage === "image1"
      ? setSelectedImage("image2")
      : setSelectedImage("image1");
  }

  return (
    <div className="mx-0 lg:mx-12 mt-4">
      <Link
        href="/shop"
        className="uppercase text-4xl hover:opacity-70 font-serif text-white">
        {"← "}
        <span className="text-xl">BACK</span>
      </Link>
      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 font-serif mb-0">
        <button onClick={handleSelectImage} className="grid col-span-1">
          <div
            style={{
              cursor: `url(${arrow}),auto`,
            }}
            className={classNames("col-span-1 col-start-1 row-start-1")}>
            {image2 && (
              <Image
                src={image2}
                alt=""
                className={classNames(
                  selectedImage === "image2" ? "opacity-100" : "opacity-0",
                  "object-cover w-full h-full"
                )}
                width={2000}
                height={2000}
              />
            )}
          </div>
          <div
            style={{
              cursor: `url(${arrow}),auto`,
            }}
            className={classNames("col-span-1 col-start-1 row-start-1")}>
            {image1 && (
              <Image
                src={image1}
                alt=""
                className={classNames(
                  selectedImage === "image1" ? "opacity-100" : "opacity-0",
                  "object-cover w-full h-full"
                )}
                width={2000}
                height={2000}
              />
            )}
          </div>
        </button>
        <div className="lg:col-start-2 p-12 bg-primary-100">
          <h1 className="uppercase text-4xl">{product.name}</h1>
          <h1 className="my-12">{product.description}</h1>
          <h1 className="my-12">
            {product.active ? <p>${price}</p> : <p>SOLD OUT</p>}
          </h1>
          {product.active && (
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
          )}
          <button
            disabled={!product.active}
            className={classNames(
              !product.active
                ? "bg-gray-100 text-gray-300"
                : "hover:bg-black hover:text-white border-black border bg-white",
              "font-sans uppercase mt-4 py-4 px-8 "
            )}
            onClick={handleUpdateCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
