// @ts-ignore
import menu from "../assets/icons/icons8-menu-50.png";
// @ts-ignore
import close from "../assets/icons/icons8-close-50.png";

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
  const [showCart, setShowCart] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
  });

  console.log({ screenHeight, bigScreen });

  return screenHeight > 0 && bigScreen !== undefined ? (
    <div
      className={classNames(
        "bg-black",
        "h-screen flex flex-col transition-all relative"
      )}>
      <span className="lg:hidden inline">
        <button
          className="w-full bg-primary-100 pb-2 flex justify-end pr-4"
          onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <img className="h-[38px] pt-2 pl-1 hover:opacity-75" src={close} />
          ) : (
            <img className="h-[38px] pt-2 pl-1 hover:opacity-75" src={menu} />
          )}
        </button>
        {showNav && (
          <nav
            className={classNames(
              "bg-primary-100 z-40 text-xl absolute w-full"
            )}>
            <Link
              className="h-[35px] flex justify-end"
              to="/shop"
              onClick={() => setShowNav(false)}>
              <h1
                className={classNames(
                  pathname === "/shop/"
                    ? "underline cursor-default"
                    : "hover:tracking-widest",
                  "transition-all border-primary-200 w-fit mr-4 sm:mr-12"
                )}>
                SHOP
              </h1>
            </Link>
            <Link
              className="h-[35px] flex justify-end"
              to="/submit"
              onClick={() => setShowNav(false)}>
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
            <Link
              className="h-[35px] flex justify-end"
              to="/events"
              onClick={() => setShowNav(false)}>
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
            <Link
              className="h-[35px] flex justify-end"
              to="/books"
              onClick={() => setShowNav(false)}>
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
            <Link
              className="h-[35px] flex justify-end"
              to="/about"
              onClick={() => setShowNav(false)}>
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
            <button
              className="h-[35px] flex justify-end w-full"
              onClick={() => {
                setShowCart(!showCart);
                setShowNav(false);
              }}>
              <h1
                className={classNames(
                  showCart
                    ? "underline cursor-default"
                    : "hover:tracking-widest",
                  "font-sans transition-all border-primary-200 w-fit mr-4 sm:mr-12"
                )}>
                CART !
              </h1>
            </button>
          </nav>
        )}
      </span>
      {screenHeight > 0 && bigScreen !== undefined && (
        <Link to="/">
          <h1
            className={classNames(
              "absolute left-0 text-primary-200 hover:tracking-widest hover:ml-4 h-0 font-display transition-all",
              "text-small top-8 lg:top-[-20px]",
              bigScreen && "md:text-medium",
              bigScreen && "lg:text-big lg:top-[-40px]",
              bigScreen && "xl:text-display xl:top-[-72px]"
            )}>
            pansy
          </h1>
        </Link>
      )}
      <nav
        className={classNames(
          "mt-28 w-full flex-row items-end text-2xl flex-wrap text-primary-200 hidden lg:flex",
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
      <main className="mt-20 md:mt-36 lg:mt-[15px] min-[2200px]:pt-[48px] min-[2200px]:bg-primary-200 z-20 mx-auto">
        {children}
      </main>
      <Cart
        collapsed={!showCart}
        toggleCollapsed={(opposite) => setShowCart(!opposite)}
      />
    </div>
  ) : null;
};

export default Layout;
