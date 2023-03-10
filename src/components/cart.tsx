// @ts-ignore
import shoppingCart from "../../public/assets/icons/icons8-shopping-bag-64-white.png";
// @ts-ignore
import cancel from "../../public/assets/icons/icons8-close-50.png";

import classNames from "classnames";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import useLocalStorage, { getLocalStorage } from "../hooks/useLocalStorage";
import { ProductWithPriceAndQty } from "../pages/shop";
import Image from "next/image";
import useOutsideClick from "../hooks/useOutsideClick";

interface CartProps {
  collapsed: boolean;
  toggleCollapsed: Dispatch<SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({
  collapsed,
  toggleCollapsed,
}: CartProps) => {
  const cartItems: Record<string, ProductWithPriceAndQty> =
    getLocalStorage("cart");
  const [step, setStep] = useState<Step>(Step.review);
  const [location, setLocation] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => !collapsed && toggleCollapsed(true));
  const itemKeys = Object.keys(cartItems).filter((key) => {
    return cartItems[key] !== null;
  });
  const numberOfItemsInCart = itemKeys.reduce((prev, current) => {
    if (cartItems[current]) {
      return prev + cartItems[current].quantity;
    }
    return prev;
  }, 0);
  const [_, updateCart] = useLocalStorage("cart", {} as any);

  useEffect(() => {
    setLocation(window.location.toString());
  }, []);

  const handleUpdateCart = (
    product: ProductWithPriceAndQty,
    decrement?: boolean,
    deleteItem?: boolean
  ) => {
    const currentCart = getLocalStorage("cart");
    const current = currentCart[product.id];

    if (deleteItem) {
      const updated = {
        ...currentCart,
        [product.id]: null,
      };
      updateCart(updated);
      return;
    }

    if (current) {
      const updated = {
        ...currentCart,
        [product.id]: {
          ...(product ? product : {}),
          quantity: decrement ? current.quantity - 1 : current.quantity + 1,
        },
      };
      updateCart(updated);
      return;
    } else {
      updateCart({ ...currentCart, [product.id]: { ...product, quantity: 1 } });
      return;
    }
  };

  useEffect(() => {
    const url = location && new URL(location);
    const success = url && url.searchParams.get("success");

    if (success) {
      // replace URL so you can't navigate back to success state
      toggleCollapsed(false);
      setStep(Step.success);
      updateCart({});
    }
  }, [location]);

  const incrementQty = (product: ProductWithPriceAndQty, decrement?: boolean) =>
    handleUpdateCart(product, decrement);

  return (
    <div
      ref={ref}
      className={classNames(
        collapsed
          ? "lg:w-10 lg:block hidden mr-2 h-0 self-end"
          : "w-full sm:w-1/2 xl:w-1/3 shadow-xl bg-secondary-200 top-0 right-0 pb-12 absolute h-full",
        "z-30"
      )}>
      {collapsed ? (
        <button
          className={classNames(
            collapsed ? "h-0 mt-1" : "",
            "h-screen flex flex-col"
          )}
          onClick={() => {
            setStep(Step.review);
            toggleCollapsed(!collapsed);
          }}>
          <Image className="pt-2 hover:opacity-75" src={shoppingCart} alt="" />
          {numberOfItemsInCart > 0 && (
            <div
              className={classNames(
                numberOfItemsInCart > 9 ? "left-[0px]" : "left-[1px]",
                "relative text-xs text-center bottom-[20px] text-white font-serif"
              )}>
              {numberOfItemsInCart}
            </div>
          )}
        </button>
      ) : (
        <div className="flex flex-col">
          <button onClick={() => toggleCollapsed(!collapsed)}>
            <Image
              className="pt-2 pl-2 h-10 w-10 hover:opacity-75"
              src={cancel}
              alt=""
            />
          </button>
          {step === "review" && (
            <div className="mx-12">
              {getCartContents(
                itemKeys,
                cartItems,
                incrementQty,
                handleUpdateCart
              )}
              <button
                disabled={!itemKeys.length}
                className={classNames(
                  !itemKeys.length
                    ? "bg-gray-100 text-gray-300"
                    : "bg-white hover:bg-black hover:text-white",
                  "py-2 uppercase transition-colors w-full text-2xl"
                )}
                onClick={() => handleCheckout(cartItems)}>
                Checkout
              </button>
            </div>
          )}
          {step === "success" && (
            <div className="text-center font-serif text-xl mt-12">
              <p>Thank you for your purchase !</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

enum Step {
  review = "review",
  success = "success",
}

async function handleCheckout(
  cartItems: Record<string, ProductWithPriceAndQty>
) {
  const itemKeys = Object.keys(cartItems).filter((key) => {
    return cartItems[key] !== null;
  });
  const lineItems = itemKeys.map((key) => {
    if (cartItems[key]) {
      return {
        price: cartItems[key].price.id,
        quantity: cartItems[key].quantity,
      };
    }
  });
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ lineItems }),
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
  incrementQty: (product: ProductWithPriceAndQty, decrement?: boolean) => void,
  handleUpdateCart: (
    product: ProductWithPriceAndQty,
    decrement?: boolean,
    deleteItem?: boolean
  ) => void
) {
  let subtotal = 0;

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
      const image = `/products/images/${product.id}.jpg`;
      const price = product.price.unit_amount
        ? product.price.unit_amount / 100
        : 0;

      subtotal = subtotal + price * localQty;

      return (
        <div
          className={classNames(
            "cart font-serif text-lg my-8 grid bg-secondary-100 p-4 rounded-lg",
            "lg:grid-rows-2",
            "xl:grid-cols-5 xl:grid-rows-1"
          )}>
          {image && (
            <Image
              src={image}
              alt=""
              className="object-cover h-[70px] w-[70px] row-start-1 col-start-1 place-self-center"
              height={70}
              width={70}
            />
          )}
          <div
            className={classNames(
              "grid grid-cols-3 grid-rows-2 content-center items-center ml-4 mt-8",
              "xl:col-start-2 xl:col-span-4 xl:row-start-1 xl:mt-0"
            )}>
            <p className="ml-4 col-start-1 col-span-2 text-base">
              {product.name}
            </p>
            <p>${price}</p>
            <hr className="w-full col-start-1 col-span-3 border-secondary-200" />
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
            <button
              onClick={() => handleUpdateCart(product, false, true)}
              className="uppercase text-xs justify-self-start hover:underline self-end mb-1">
              delete
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      {items}
      <div
        className={classNames(
          "cart font-serif text-lg my-8 grid p-4",
          "grid-rows-2 grid-cols-1",
          "2xl:grid-cols-4 2xl:grid-rows-1"
        )}>
        <p className={classNames("col-start-3")}>{"Subtotal: "}</p>
        <p
          className={classNames(
            "row-start-2 col-start-3 2xl:row-start-1 2xl:col-start-4"
          )}>
          ${subtotal}
        </p>
      </div>
    </div>
  );
}

export default Cart;
