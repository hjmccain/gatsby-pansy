import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import Cart from "./cart";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <div
      className={classNames(
        "bg-white",
        "h-screen flex flex-col transition-all relative"
      )}>
      <Link to="/">
        <h1
          className={classNames(
            "absolute left-0 text-primary-200 hover:tracking-widest hover:ml-4 h-0 font-display transition-all",
            "text-small top-[-20px]",
            "md:text-medium",
            "lg:text-big lg:top-[-40px]",
            "xl:text-display xl:top-[-72px]"
          )}>
          pansy
        </h1>
      </Link>
      <nav
        className={classNames(
          "mt-28 w-full flex flex-row items-end text-2xl flex-wrap",
          "sm:text-4xl sm:flex-col sm:mt-1"
        )}>
        <Link className="block h-[35px]" to="/about">
          <h1
            className={classNames(
              pathname === "/about/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-black transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            ABOUT
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/submit">
          <h1
            className={classNames(
              pathname === "/submit/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans text-black transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            SUBMIT
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/events">
          <h1
            className={classNames(
              pathname === "/events/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans text-black transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            EVENTS
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/books">
          <h1
            className={classNames(
              pathname === "/books/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans text-black transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            BOOKS
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/shop">
          <h1
            className={classNames(
              pathname === "/shop/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans text-black transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            SHOP
          </h1>
        </Link>
      </nav>
      <main className="mt-[15px] z-20 mx-auto mr-12">{children}</main>
      <Cart />
    </div>
  );
};

export default Layout;
