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
            "absolute top-[-72px] left-0 text-primary-200 hover:tracking-widest hover:ml-4 h-0",
            "text-super-big font-display transition-all"
          )}>
          pansy
        </h1>
      </Link>
      <nav className="mt-1 w-full flex flex-col items-end text-4xl">
        <Link className="block h-[35px]" to="/about">
          <h1
            className={classNames(
              pathname === "/about/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-black transition-all border-primary-200 w-fit mr-12"
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
              "font-sans text-black transition-all border-primary-200 w-fit mr-12"
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
              "font-sans text-black transition-all border-primary-200 w-fit mr-12"
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
              "font-sans text-black transition-all border-primary-200 w-fit mr-12"
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
              "font-sans text-black transition-all border-primary-200 w-fit mr-12"
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
