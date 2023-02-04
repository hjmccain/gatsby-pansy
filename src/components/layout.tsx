import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    console.log(window.location.pathname);
    setPathname(window.location.pathname);
  });

  return (
    <div
      className={classNames(
        "bg-white justify-star",
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
      <nav className="text-right mt-1 mr-2">
        <Link className="block h-[25px]" to="/about">
          <h1
            className={classNames(
              pathname === "/about/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-2xl text-black transition-all border-primary-200"
            )}>
            ABOUT
          </h1>
        </Link>
        <Link className="block h-[25px]" to="/submit">
          <h1
            className={classNames(
              pathname === "/submit/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-2xl font-sans text-black transition-all border-primary-200"
            )}>
            SUBMIT
          </h1>
        </Link>
        <Link className="block h-[25px]" to="/events">
          <h1
            className={classNames(
              pathname === "/events/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-2xl font-sans text-black transition-all border-primary-200"
            )}>
            EVENTS
          </h1>
        </Link>
        <Link className="block h-[25px]" to="/books">
          <h1
            className={classNames(
              pathname === "/books/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-2xl font-sans text-black transition-all border-primary-200"
            )}>
            BOOKS
          </h1>
        </Link>
        <Link className="block h-[25px]" to="/shop">
          <h1
            className={classNames(
              pathname === "/shop/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "text-2xl font-sans text-black transition-all border-primary-200"
            )}>
            SHOP
          </h1>
        </Link>
      </nav>
      <main className="mt-[60px] z-20 max-w-[1500px] mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
