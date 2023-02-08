// @ts-ignore
import shoppingCart from "../../assets/icons/icons8-shopping-cart-30.png";
// @ts-ignore
import cancel from "../../assets/icons/icons8-cancel-48.png";

import classNames from "classnames";
import React, { Dispatch, useReducer } from "react";
import {
  ShoppingCartState,
  orderReducer,
  OrderAction,
  initShoppingCartState,
  Step,
} from "./state";
import Checkout from "./Checkout";

const ShoppingCart: React.FC = () => {
  const [state, dispatch] = useReducer(orderReducer, initShoppingCartState);

  const setStep = (step: Step) =>
    dispatch({ type: "step_update", payload: step });
  const toggleCollapsed = (toggleState: boolean) =>
    dispatch({ type: "toggle_collapsed", payload: toggleState });

  return (
    <div
      className={classNames(
        state.collapsed
          ? "w-10 shadow-md bg-primary-100"
          : "w-1/4 shadow-xl bg-primary-200",
        "absolute top-0 right-0  h-screen z-20 border-l transition-all"
      )}>
      {state.collapsed ? (
        <button
          className="h-screen flex flex-col"
          onClick={() => toggleCollapsed(!state.collapsed)}>
          <img className="pt-2 pl-1 hover:opacity-75" src={shoppingCart} />
        </button>
      ) : (
        <div className="flex flex-col">
          <button onClick={() => toggleCollapsed(!state.collapsed)}>
            <img className="pt-2 pl-2 h-10 hover:opacity-75" src={cancel} />
          </button>
          {state.step === Step.REVIEW && (
            <button
              className="bg-white hover:bg-black hover:text-white mx-8 py-2 uppercase transition-colors text-2xl"
              onClick={async () => {
                await handleCreateOrder(state, dispatch);
                setStep(Step.ADDRESS);
              }}>
              Checkout !
            </button>
          )}
          {state.step === Step.ADDRESS && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
              }}
              className="flex flex-col mx-8 uppercase">
              <div className="my-2 flex flex-col">
                <label>First Name</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <div className="my-2 flex flex-col">
                <label>Last Name</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <div className="my-2 flex flex-col">
                <label>Address Line 1</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <div className="my-2 flex flex-col">
                <label>Address Line 2</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <div className="my-2 flex flex-col">
                <label>City</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <div className="my-2 flex flex-col">
                <label>ZIP code</label>
                <input className="h-10 p-2 rounded-md" type="text" />
              </div>
              <button type="submit">Save</button>
            </form>
          )}
          {state.step === Step.CHECKOUT && (
            <Checkout dispatch={dispatch} state={state} />
          )}
          {state.step === Step.SUCCESS && <div>you paid!</div>}
        </div>
      )}
    </div>
  );
};

async function handleCreateOrder(
  state: ShoppingCartState,
  dispatch: Dispatch<OrderAction>
) {
  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  const response = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      order: {
        locationId: state.order.locationId,
        lineItems: state.order.lineItems,
        taxes: state.order.taxes,
        fullfillments: state.order.fulfillments,
      },
    }),
  });

  const { order } = await response.json();
  console.log({ order });
  dispatch({ type: "order_update", payload: { ...order } });
}

export default ShoppingCart;
