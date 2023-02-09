// @ts-ignore
import shoppingCart from "../assets/icons/icons8-shopping-cart-30.png";
// @ts-ignore
import cancel from "../assets/icons/icons8-cancel-48.png";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../hooks/useLocalStorage";
import { ProductWithPrice } from "../pages/shop";

const Cart: React.FC = () => {
  const cartItems: Record<string, ProductWithPrice> = getLocalStorage("cart");
  const [step, setStep] = useState<Step>(Step.review);
  const [collapsed, toggleCollapsed] = useState(false);
  const location = window.location.toString();

  useEffect(() => {
    const url = new URL(location);
    const success = url.searchParams.get("success");

    if (success) {
      // replace URL so you can't navigate back to success state
      toggleCollapsed(false);
      setStep(Step.success);
    }
  }, [location]);

  return (
    <div
      className={classNames(
        collapsed
          ? "w-10 shadow-md bg-primary-100"
          : "w-1/4 shadow-xl bg-primary-200",
        "absolute top-0 right-0  h-screen z-20 border-l transition-all"
      )}>
      {collapsed ? (
        <button
          className="h-screen flex flex-col"
          onClick={() => {
            setStep(Step.review);
            toggleCollapsed(!collapsed);
          }}>
          <img className="pt-2 pl-1 hover:opacity-75" src={shoppingCart} />
        </button>
      ) : (
        <div className="flex flex-col">
          <button onClick={() => toggleCollapsed(!collapsed)}>
            <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
          </button>
          {step === "review" && (
            <>
              {Object.keys(cartItems).map((key) => {
                const item = cartItems[key];
                return <div>{item.name}</div>;
              })}
              <button
                className="bg-white hover:bg-black hover:text-white mx-8 py-2 uppercase transition-colors text-2xl"
                onClick={handleCheckout}>
                Checkout !
              </button>
            </>
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

export default Cart;
