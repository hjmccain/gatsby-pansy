import { Order } from "square";

export enum Step {
  REVIEW = "review",
  ADDRESS = "address",
  CHECKOUT = "checkout",
  SUCCESS = "success",
}

export interface ShoppingCartState {
  order: Order;
  step: Step;
  collapsed: boolean;
  address: Address;
}

export type Address = {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  locality: string;
  state: string;
  postalCode: string;
} | null;

export interface OrderAction {
  type: "order_update";
  payload: Partial<Order>;
}

export interface StepAction {
  type: "step_update";
  payload: Step;
}

export interface CollapseAction {
  type: "toggle_collapsed";
  payload: boolean;
}

export type ShoppingCartActions = OrderAction | StepAction | CollapseAction;

const tucsonCombinedSalesTax = {
  uid: "TUCSON_SALES_TAX",
  scope: "ORDER",
  name: "Tucson Combined Sales Tax",
  percentage: "8.7",
};

const orderFulfillment = {
  type: "PICKUP",
  pickupDetails: {
    recipient: {
      customerId: "{CUSTOMER_ID}",
      displayName: "Jaiden Urie",
    },
    pickupAt: "{TIMESTAMP}",
  },
};

export const initShoppingCartState: ShoppingCartState = {
  collapsed: false,
  step: Step.REVIEW,
  address: null,
  order: {
    fulfillments: [orderFulfillment],
    taxes: [tucsonCombinedSalesTax],
    id: "",
    locationId: "L2XJYT879D3G9",
    lineItems: [
      {
        name: "poeming",
        quantity: "1",
        basePriceMoney: {
          amount: BigInt(1000),
          currency: "USD",
        },
      },
      {
        name: "whats-not-there",
        quantity: "1",
        basePriceMoney: {
          amount: BigInt(500),
          currency: "USD",
        },
      },
    ],
  },
};

export const orderReducer = (
  state: ShoppingCartState,
  action: ShoppingCartActions
): ShoppingCartState => {
  switch (action.type) {
    case "order_update": {
      return {
        ...state,
        order: { ...state.order, ...action.payload },
      };
    }
    case "toggle_collapsed": {
      return {
        ...state,
        collapsed: action.payload,
      };
    }
    case "step_update": {
      return {
        ...state,
        step: action.payload,
      };
    }
    default:
      return state;
  }
};
