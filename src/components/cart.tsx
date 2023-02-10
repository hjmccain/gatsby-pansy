// @ts-ignore
import shoppingCart from "../assets/icons/icons8-shopping-cart-30.png";
// @ts-ignore
import cancel from "../assets/icons/icons8-cancel-48.png";

import classNames from "classnames";
import React, {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { getLocalStorage } from "../hooks/useLocalStorage";
import { findImage, ProductWithPrice } from "../pages/shop";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import useOutsideClick from "../hooks/useOutsideClick";

const Cart: React.FC = () => {
  const cartItems: Record<string, ProductWithPrice> = getLocalStorage("cart");
  const [step, setStep] = useState<Step>(Step.review);
  const [collapsed, toggleCollapsed] = useState(true);
  const location = window.location.toString();
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, () => !collapsed && toggleCollapsed(true));
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

  return (
    <div
      ref={ref}
      className={classNames(
        collapsed
          ? "w-10 shadow-md bg-primary-100"
          : "w-1/3 shadow-xl bg-primary-200",
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
            <div className="mx-12">
              {Object.keys(cartItems).map((key) => {
                const product = cartItems[key];
                const image = findImage(allFile, product.id);
                const price = product.price.unit_amount
                  ? product.price.unit_amount / 100
                  : null;

                return (
                  <div className="cart grid grid-cols-5 content-center items-center mb-8 font-body">
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt=""
                        className="object-cover h-[475px] row-start-1 col-start-1"
                      />
                    )}
                    <p className="ml-4 col-start-2 col-span-3">
                      {product.name}
                    </p>
                    <p>${price}</p>
                  </div>
                );
              })}
              <button
                className="bg-white hover:bg-black hover:text-white py-2 uppercase transition-colors w-full text-2xl"
                onClick={handleCheckout}>
                Checkout !
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

export default Cart;
