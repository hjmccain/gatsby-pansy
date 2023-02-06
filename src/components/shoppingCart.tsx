import classNames from "classnames";
import React, { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { Client, Environment } from "square";
import shoppingCart from "../assets/icons/icons8-shopping-cart-30.png";

enum Step {
  review = "review",
  checkout = "checkout",
  success = "success",
}

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox,
});

const ShoppingCart: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.review);
  const [collapsed, toggleCollapsed] = useState(false);

  return (
    <div
      className={classNames(
        collapsed ? "w-10 shadow-md" : "w-1/4 shadow-xl",
        "absolute top-0 right-0 bg-white h-screen z-20 border-l transition-all"
      )}>
      {collapsed ? (
        <button onClick={() => toggleCollapsed(!collapsed)}>
          <img className="pt-2 pl-1" src={shoppingCart} />
        </button>
      ) : (
        <div>
          {step === "review" && (
            <div className="">
              <button onClick={() => toggleCollapsed(!collapsed)}>X</button>
              List of things 2 buy
              <button onClick={() => setStep(Step.checkout)}>Check out</button>
            </div>
          )}
          {step === "checkout" && (
            <PaymentForm
              applicationId="sandbox-sq0idb-bw46YDt039TghHyglqvphw"
              locationId="LW7R7Y55FNZHN"
              cardTokenizeResponseReceived={(token, verifiedBuyer) => {
                console.log("token:", token);
                console.log("verifiedBuyer:", verifiedBuyer);
              }}>
              <CreditCard />
            </PaymentForm>
          )}
          {step === "success" && <div>you paid!</div>}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
