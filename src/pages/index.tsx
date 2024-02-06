import React, { useState } from "react";
import {} from "react";
import Link from "next/link";
import classNames from "classnames";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pansy press - poetry in tucson, az",
  description: "pansy press is a poetry project in tucson, az",
};

// TODO
// Hide large nav bar at short screen heights
// Add real copy
// Set up Stripe store
// Swap in real API keys

const IndexPage: React.FC = () => {
  const setSessionValue = () => {
    if (typeof window !== "undefined") {
      const sessionValue = window.sessionStorage.getItem("entered");
      return sessionValue === "true";
    }
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
          entered ? "bg-black justify-start" : "bg-primary-200 justify-center",
          "h-screen flex flex-col transition-all relative"
        )}>
        <button onClick={() => enterSite()}>
          <h1
            className={classNames(
              entered
                ? "absolute left-0 text-white-alt z-10"
                : "relative text-center text-white-alt hover:tracking-widest z-10",
              "font-display transition-all",
              "text-small top-[-20px]",
              "md:text-medium",
              "lg:text-big lg:top-[-48px]",
              "xl:text-display xl:top-[-72px]"
            )}>
            pansy
          </h1>
        </button>
        {/* <Image
          src="../assets/images/linda-pansy.jpg"
          alt=""
          width={600}
          className={classNames(
            "absolute right-0 md:right-16 lg:right-36 bottom-10 md:bottom-[-100px] 2xl:right-[40%] opacity-75",
            !entered && "hidden lg:block"
          )}
        /> */}
        {entered && <Home />}
      </div>
    </main>
  );
};

const Home: React.FC = () => {
  return (
    <nav
      className={classNames(
        "relative z-20 text-primary-200 text-small",
        "sm:text-medium",
        "xl:text-big"
      )}>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        href="/shop">
        <h1
          className={classNames(
            "mt-[60px] sm:mt-[150px] w-fit hover:w-full block font-sans hover:text-black hover:bg-white-alt transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SHOP
        </h1>
      </Link>
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        href="/submit">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-black hover:bg-white-alt transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          SUBMIT
        </h1>
      </Link>
      {/* <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        href="/events">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-black hover:bg-white-alt transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          EVENTS
        </h1>
      </Link> */}
      {/* <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        href="/books">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-black hover:bg-white-alt transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          BOOKS
        </h1>
      </Link> */}
      <Link
        className={classNames("block h-[66px]", "sm:h-[95px]", "xl:h-[125px]")}
        href="/about">
        <h1
          className={classNames(
            "w-fit hover:w-full block font-sans hover:text-black hover:bg-white-alt transition-color border-primary-200 hover:tracking-widest h-fit"
          )}>
          ABOUT
        </h1>
      </Link>
    </nav>
  );
};

// export const Head: HeadFC = () => <title>Welcome Page</title>;

export default IndexPage;
