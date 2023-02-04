import * as React from "react";
import { useState } from "react";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import classNames from "classnames";

const IndexPage: React.FC = () => {
  const [entered, enterSite] = useState(false);

  return (
    <main>
      <div
        className={classNames(
          entered ? "bg-white justify-start" : "bg-primary-200 justify-center",
          "h-screen flex flex-col transition-all relative"
        )}>
        <button onClick={() => enterSite(true)} disabled={entered}>
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
        {entered && <Home />}
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
            "mt-[150px] text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest"
          )}>
          ABOUT
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/submit">
        <h1
          className={classNames(
            "text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest"
          )}>
          SUBMIT
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/events">
        <h1
          className={classNames(
            "text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest"
          )}>
          EVENTS
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/books">
        <h1
          className={classNames(
            "text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest"
          )}>
          BOOKS
        </h1>
      </Link>
      <Link className="block h-[100px]" to="/shop">
        <h1
          className={classNames(
            "text-big font-sans text-black hover:text-white hover:bg-black transition-color border-primary-200 hover:tracking-widest"
          )}>
          SHOP
        </h1>
      </Link>
    </nav>
  );
};

export const Head: HeadFC = () => <title>Welcome Page</title>;

export default IndexPage;
