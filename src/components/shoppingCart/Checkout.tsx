// @ts-ignore
import cancel from "../../assets/icons/icons8-cancel-48.png";

import React, { Dispatch } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import { Order } from "square";
import { ShoppingCartActions, ShoppingCartState, Step } from "./state";

interface CheckoutProps {
  dispatch: Dispatch<ShoppingCartActions>;
  state: ShoppingCartState;
}

const Checkout: React.FC<CheckoutProps> = ({
  dispatch,
  state,
}: CheckoutProps) => {
  const setStep = (step: Step) =>
    dispatch({ type: "step_update", payload: step });
  const toggleCollapsed = (toggleState: boolean) =>
    dispatch({ type: "toggle_collapsed", payload: toggleState });

  return (
    <div>
      <button
        onClick={() => {
          toggleCollapsed(!state.collapsed);
          setStep(Step.REVIEW);
        }}>
        <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
      </button>
      <form className="flex flex-col mx-8 uppercase">
        {/* <p>
          {`subtotal: ${
            toDollarsString(state.order.totalMoney?.amount || BigInt(0)) -
            toDollarsString(state.order.totalTaxMoney?.amount || BigInt(0))
          }`}
        </p>
        <p>
          {`taxes: ${toDollarsString(
            state.order.totalTaxMoney?.amount || BigInt(0)
          )}`}
        </p>
        <p>
          {`total: ${toDollarsString(
            state.order.totalMoney?.amount || BigInt(0)
          )}`}
        </p> */}
        <div className="my-2 flex flex-col font-sans">
          <label>PAYMENT</label>
          <PaymentForm
            applicationId="sandbox-sq0idb-bw46YDt039TghHyglqvphw"
            locationId="LW7R7Y55FNZHN"
            cardTokenizeResponseReceived={(token, verifiedBuyer) =>
              handleCardTokenization(state.order)(token, verifiedBuyer)
            }>
            <CreditCard />
          </PaymentForm>
        </div>
      </form>
    </div>
  );
};

function toDollarsString(total: bigint) {
  return Number(total) / 100;
}

function handleCardTokenization(order: Order) {
  return async function (token: any, verifiedBuyer: any) {
    const body = {
      sourceId: token.token,
      amountMoney: order.totalMoney?.amount,
      orderId: order.id,
    };

    const response = await fetch("/api/pay", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const res = await response.json();
    console.log({ res });
  };
}

export default Checkout;
