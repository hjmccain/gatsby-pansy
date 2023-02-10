import React, { useState } from "react";
import {} from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import classNames from "classnames";

const IndexPage: React.FC = () => {
  const [entered, setEntered] = useState(
    window.sessionStorage.getItem("entered")
  );

  const enterSite = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("entered", "true");
      setEntered(window.sessionStorage.getItem("entered"));
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
                ? "absolute top-[-72px] left-0 text-primary-200"
                : "text-center text-white hover:tracking-widest",
              "text-super-big font-display transition-all"
            )}>
            pansy
          </h1>
        </button>
        {entered === "true" && <Home />}
      </div>
    </main>
  );
};

const Home: React.FC = () => {
  return (
    <nav className="relative z-10">
      <Link className="block h-[100px]" to="/about">
        <h1
          className={classNames(
            "mt-[150px] w-fit hover:w-full block text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          ABOUT
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/submit">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SUBMIT
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/events">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          EVENTS
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/books">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          BOOKS
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/shop">
        <h1
          className={classNames(
            "w-fit hover:w-full block text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SHOP
        </h1>
      </Link>
    </nav>
  );
};

export const Head: HeadFC = () => <title>Welcome Page</title>;

export default IndexPage;
