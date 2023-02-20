import React, { useState } from "react";
import {} from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import classNames from "classnames";

// TODO
// Make site responsive 🥲
// Actually hook up API

// THEN
// Clean up assets
// Take pictures & edit for consistent presentation
// Set up Stripe store
// Swap in real API keys

const IndexPage: React.FC = () => {
  const setSessionValue = () => {
    const sessionValue = window.sessionStorage.getItem("entered");
    return sessionValue === "true";
  };
  const [entered, setEntered] = useState(setSessionValue);
  const enterSite = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("entered", "true");
      setEntered(setSessionValue);
    }
  };

  return (
    <main>
      <div
        className={classNames(
          entered ? "bg-white justify-start" : "bg-primary-200 justify-center",
          "h-screen flex flex-col transition-all relative"
        )}>
        <button onClick={() => enterSite()}>
          <h1
            className={classNames(
              entered
                ? "absolute left-0 text-black"
                : "text-center text-white hover:tracking-widest",
              "font-display transition-all",
              "text-small top-[-40px]",
              "md:text-medium",
              "lg:text-big lg:top-[-60px]",
              "xl:text-display xl:top-[-72px]"
            )}>
            pansy
          </h1>
        </button>
        {entered && <Home />}
      </div>
    </main>
  );
};

const Home: React.FC = () => {
  return (
    <nav
      className={classNames(
        "relative z-10 text-primary-200 text-small",
        "sm:text-medium",
        "xl:text-big"
      )}>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        to="/shop">
        <h1
          className={classNames(
            "mt-[60px] sm:mt-[150px] w-fit hover:w-full block font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SHOP
        </h1>
      </Link>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        to="/submit">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SUBMIT
        </h1>
      </Link>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        to="/events">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          EVENTS
        </h1>
      </Link>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        to="/books">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          BOOKS
        </h1>
      </Link>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        to="/about">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          ABOUT
        </h1>
      </Link>
    </nav>
  );
};

export const Head: HeadFC = () => <title>Welcome Page</title>;

export default IndexPage;
