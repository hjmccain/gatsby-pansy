import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import useHandleWindowResize from "../hooks/useHandleWindowResize";
import Cart from "./cart";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [pathname, setPathname] = useState("");
  const screenHeight = useHandleWindowResize();
  const bigScreen = screenHeight > 740;

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  return (
    <div
      className={classNames(
        "bg-black",
        "h-screen flex flex-col transition-all relative"
      )}>
      <Link to="/">
        <h1
          className={classNames(
            "absolute left-0 text-primary-200 hover:tracking-widest hover:ml-4 h-0 font-display transition-all",
            "text-small top-[-20px]",
            bigScreen && "md:text-medium",
            bigScreen && "lg:text-big lg:top-[-40px]",
            bigScreen && "xl:text-display xl:top-[-72px]"
          )}>
          pansy
        </h1>
      </Link>
      <nav
        className={classNames(
          "justify-start mt-28 w-full flex flex-row items-end text-2xl flex-wrap text-primary-200",
          !bigScreen &&
            "lg:mt-0 lg:justify-end lg:mb-2 xl:mb-4 xl:text-4xl lg:pt-6 xl:pt-4 ",
          bigScreen &&
            "min-[2200px]:text-x-small xl:justify-end lg:mt-1 min-[2200px]:mt-36 min-[2200px]:flex-row lg:flex-col 2xl:text-3xl"
        )}>
        <Link className="block h-[35px]" to="/shop">
          <h1
            className={classNames(
              pathname === "/shop/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              " transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            SHOP
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/submit">
          <h1
            className={classNames(
              pathname === "/submit/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-12"
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
              "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-12"
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
              "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            BOOKS
          </h1>
        </Link>
        <Link className="block h-[35px]" to="/about">
          <h1
            className={classNames(
              pathname === "/about/"
                ? "underline cursor-default"
                : "hover:tracking-widest",
              "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-12"
            )}>
            ABOUT
          </h1>
        </Link>
      </nav>
      <main className="mt-[15px] z-20 mx-auto mr-12">{children}</main>
      <Cart />
    </div>
  );
};

export default Layout;
