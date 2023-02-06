import classNames from "classnames";
import React, { useState } from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { Client, Environment } from "square";

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
        collapsed ? "w-10" : "w-1/4",
        "absolute  top-0 right-0 bg-white h-screen"
      )}>
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
  );
};

export default ShoppingCart;
