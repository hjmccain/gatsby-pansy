// @ts-ignore
import menu from "../assets/icons/icons8-menu-50.png";
// @ts-ignore
import close from "../assets/icons/icons8-close-50.png";

import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import useHandleWindowResize from "../hooks/useHandleWindowResize";
import Cart from "./cart";
import Marquee from "./marquee";

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

  const desktopNav = (
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
            " transition-all border-primary-200 w-fit mr-4 sm:mr-20"
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
            "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-20"
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
            "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-20"
          )}>
          EVENTS
        </h1>
      </Link>
      {/* <Link className="block h-[35px]" to="/books">
        <h1
          className={classNames(
            pathname === "/books/"
              ? "underline cursor-default"
              : "hover:tracking-widest",
            "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-20"
          )}>
          BOOKS
        </h1>
      </Link> */}
      <Link className="block h-[35px]" to="/about">
        <h1
          className={classNames(
            pathname === "/about/"
              ? "underline cursor-default"
              : "hover:tracking-widest",
            "font-sans  transition-all border-primary-200 w-fit mr-4 sm:mr-20"
          )}>
          ABOUT
        </h1>
      </Link>
    </nav>
  );

  const mobileNav = (
    <nav className={classNames("bg-primary-100 z-40 text-xl absolute w-full")}>
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
      {/* <Link
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
      </Link> */}
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
            showCart ? "underline cursor-default" : "hover:tracking-widest",
            "font-sans transition-all border-primary-200 w-fit mr-4 sm:mr-12"
          )}>
          CART !
        </h1>
      </button>
    </nav>
  );

  return screenHeight > 0 && bigScreen !== undefined ? (
    <div
      className={classNames(
        "bg-black",
        "flex flex-col transition-all relative"
      )}>
      <span className="lg:hidden inline">
        <button
          className="w-full bg-primary-200 pb-2 flex justify-end pr-4"
          onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <img className="h-[38px] pt-2 pl-1 hover:opacity-75" src={close} />
          ) : (
            <img className="h-[38px] pt-2 pl-1 hover:opacity-75" src={menu} />
          )}
        </button>
        {showNav && mobileNav}
      </span>
      <div className="flex flex-col h-screen overflow-scroll">
        <div className="font-serif">
          <Marquee />
        </div>
        <div className="h-fit flex items-center">
          <Link to="/">
            <h1
              className={classNames(
                "text-primary-200 hover:tracking-widest hover:ml-4 font-display transition-all h-fit leading-[80%]",
                "text-small mt-[12px] mb-[-16px]",
                bigScreen && "md:text-medium md:mt-[12px] md:mb-[-16px]",
                bigScreen && "lg:text-big md:mt-[22px] md:mb-[-22px]",
                bigScreen && "xl:text-display xl:mt-[30px] xl:mb-[-34px]"
              )}>
              pansy
            </h1>
          </Link>
          {desktopNav}
        </div>
        <main
          className={classNames(
            pathname === "/shop/"
              ? "bg-black"
              : "min-[2200px]:bg-primary-200 h-full overflow-scroll lg:overflow-hidden",
            "mt-2 min-[2200px]:pt-[48px] z-20 mx-auto"
          )}>
          {children}
        </main>
      </div>
      <Cart
        collapsed={!showCart}
        toggleCollapsed={(opposite) => setShowCart(!opposite)}
      />
    </div>
  ) : null;
};

export default Layout;
