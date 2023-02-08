import classNames from "classnames";
import React, { useState } from "react";
// @ts-ignore
import shoppingCart from "../assets/icons/icons8-shopping-cart-30.png";
// @ts-ignore
import cancel from "../assets/icons/icons8-cancel-48.png";

enum Step {
  review = "review",
  checkout = "checkout",
  success = "success",
}

async function cardTokenizeResponseReceived(token: any, verifiedBuyer: any) {
  const response = await fetch("/api/paymentHandler", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      sourceId: token.token,
    }),
  });

  console.log(await response.json());
}

const ShoppingCart: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.review);
  const [collapsed, toggleCollapsed] = useState(false);

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
          onClick={() => toggleCollapsed(!collapsed)}>
          <img className="pt-2 pl-1 hover:opacity-75" src={shoppingCart} />
        </button>
      ) : (
        <div>
          {step === "review" && (
            <div className="flex flex-col">
              <button onClick={() => toggleCollapsed(!collapsed)}>
                <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
              </button>
              <button
                className="bg-white hover:bg-black hover:text-white mx-8 py-2 uppercase transition-colors text-2xl"
                onClick={() => setStep(Step.checkout)}>
                Checkout !
              </button>
            </div>
          )}
          {step === "checkout" && (
            <>
              <button
                onClick={() => {
                  toggleCollapsed(!collapsed);
                  setStep(Step.review);
                }}>
                <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
              </button>
              <div className="flex flex-col mx-8"></div>
            </>
          )}
          {step === "success" && <div>you paid!</div>}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
