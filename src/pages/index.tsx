import React, { useState } from "react";
import {} from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import classNames from "classnames";

// TODO
// Make site responsive 🥲
// Figure out how to keep cart in sync

// THEN
// Clean up assets
// Take pictures & edit for consistent presentation

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
                ? "absolute top-[-72px] left-0 text-black"
                : "text-center text-white hover:tracking-widest",
              "text-super-big font-display transition-all"
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
    <nav className="relative z-10 text-primary-200">
      <Link className="block h-[125px]" to="/about">
        <h1
          className={classNames(
            "mt-[150px] w-fit hover:w-full block text-big font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          ABOUT
        </h1>
      </Link>
      <Link className="block h-[125px]" to="/submit">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SUBMIT
        </h1>
      </Link>
      <Link className="block h-[125px]" to="/events">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          EVENTS
        </h1>
      </Link>
      <Link className="block h-[125px]" to="/books">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          BOOKS
        </h1>
      </Link>
      <Link className="block h-[125px]" to="/shop">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SHOP
        </h1>
      </Link>
    </nav>
  );
};

export const Head: HeadFC = () => <title>Welcome Page</title>;

export default IndexPage;
