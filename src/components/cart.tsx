// @ts-ignore
import shoppingCart from "../assets/icons/icons8-shopping-cart-30.png";
// @ts-ignore
import cancel from "../assets/icons/icons8-cancel-48.png";

import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import useLocalStorage, { getLocalStorage } from "../hooks/useLocalStorage";
import { ProductWithPrice, ProductWithPriceAndQty } from "../pages/shop";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useOutsideClick from "../hooks/useOutsideClick";
import findImage, { AllFile } from "../helpers/findImage";
import useHandleWindowResize from "../hooks/useHandleWindowResize";

const Cart: React.FC = () => {
  const screenHeight = useHandleWindowResize();
  const cartItems: Record<string, ProductWithPriceAndQty> =
    getLocalStorage("cart");
  const [step, setStep] = useState<Step>(Step.review);
  const [collapsed, toggleCollapsed] = useState(true);
  const location = window.location.toString();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => !collapsed && toggleCollapsed(true));
  const itemArray = Object.keys(cartItems);
  const itemsInCart = itemArray.reduce((prev, current) => {
    return prev + cartItems[current].quantity;
  }, 0);
  const [cart, updateCart] = useLocalStorage("cart", {} as any);
  const handleUpdateCart = (
    product: ProductWithPriceAndQty,
    decrement?: boolean,
    deleteItem?: boolean
  ) => {
    const current = cart[product.id];

    if (current) {
      if (deleteItem) {
        const updated = {
          ...cart,
          [product.id]: null,
        };
        updateCart(updated);
      } else {
        const updated = {
          ...cart,
          [product.id]: {
            ...product,
            quantity: decrement ? current.quantity - 1 : current.quantity + 1,
          },
        };
        console.log(updated);

        updateCart(updated);
      }
    } else {
      updateCart({ ...cart, [product.id]: { ...product, quantity: 1 } });
    }
  };

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
    const url = new URL(location);
    const success = url.searchParams.get("success");

    if (success) {
      // replace URL so you can't navigate back to success state
      toggleCollapsed(false);
      setStep(Step.success);
    }
  }, [location]);

  const incrementQty = (product: ProductWithPriceAndQty, decrement?: boolean) =>
    handleUpdateCart(product, decrement);

  return (
    <div
      style={{
        height: `${screenHeight + 180}px`,
        overflow: "hidden",
      }}
      ref={ref}
      className={classNames(
        collapsed
          ? "w-10 shadow-md bg-primary-100"
          : "w-1/3 shadow-xl bg-primary-200",
        "absolute top-0 right-0 z-20 border-l transition-all"
      )}>
      {collapsed ? (
        <button
          className="h-screen flex flex-col"
          onClick={() => {
            setStep(Step.review);
            toggleCollapsed(!collapsed);
          }}>
          <img className="pt-2 pl-1 hover:opacity-75" src={shoppingCart} />
          {itemsInCart > 0 && (
            <div
              className={classNames(
                itemsInCart > 9 ? "left-[3px]" : "left-[5px]",
                "relative text-xs text-center bottom-[23px] text-white"
              )}>
              {itemsInCart}
            </div>
          )}
        </button>
      ) : (
        <div className="flex flex-col">
          <button onClick={() => toggleCollapsed(!collapsed)}>
            <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
          </button>
          {step === "review" && (
            <div className="mx-12">
              {getCartContents(itemArray, cartItems, allFile, incrementQty)}
              <button
                disabled={!itemArray.length}
                className={classNames(
                  !itemArray.length
                    ? "bg-gray-100 text-gray-300"
                    : "bg-white hover:bg-black hover:text-white",
                  "py-2 uppercase transition-colors w-full text-2xl"
                )}
                onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          )}
          {step === "success" && <div>you paid!</div>}
        </div>
      )}
    </div>
  );
};

enum Step {
  review = "review",
  success = "success",
}

async function handleCheckout() {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (res) {
    const url = await res.json();
    window.location.href = url;
  } else {
    console.error("error redirecting");
  }
}

function getCartContents(
  itemArray: Array<string>,
  cartItems: Record<string, ProductWithPriceAndQty | null>,
  allFile: AllFile,
  incrementQty: (product: ProductWithPriceAndQty, decrement?: boolean) => void
) {
  if (!itemArray.length) {
    return (
      <div className="flex justify-center my-12">
        <div className="bg-black w-40 h-40 text-white rounded-full flex justify-center items-center align-center">
          <p className="font-serif text-xl text-center">Your cart is empty</p>
        </div>
      </div>
    );
  }

  const items = itemArray.map((key) => {
    const product = cartItems[key];

    if (product) {
      let localQty = product.quantity;
      const image = findImage(allFile, product.id);
      const price = product.price.unit_amount
        ? product.price.unit_amount / 100
        : null;

      return (
        <div className="cart font-serif text-lg my-8 grid grid-cols-5 bg-primary-100 p-4 rounded-lg">
          {image && (
            <GatsbyImage
              image={image}
              alt=""
              className="object-cover h-[475px] row-start-1 col-start-1 self-center"
            />
          )}
          <div className="grid grid-cols-3 grid-rows-2 content-center items-center col-start-2 col-span-4 row-start-1">
            <p className="ml-4 col-start-1 col-span-2 text-base">
              {product.name}
            </p>
            <p>${price}</p>
            <hr className="w-full col-start-1 col-span-3 border-primary-200" />
            <p className="ml-4 col-start-1 col-span-2 self-end text-base">
              QTY:{" "}
              <button
                disabled={localQty === 0}
                onClick={() => {
                  incrementQty(product, true);
                  localQty = localQty - 1;
                }}>
                -
              </button>{" "}
              {localQty}{" "}
              <button
                onClick={() => {
                  incrementQty(product, false);
                  localQty = localQty + 1;
                }}>
                +
              </button>
            </p>
            <button className="uppercase text-xs justify-self-start hover:underline self-end mb-1">
              delete
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      {/* <h1 className="text-center text-2xl font-serif">** Your Cart **</h1> */}
      {items}
    </div>
  );
}

export default Cart;
