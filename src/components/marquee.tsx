import classNames from "classnames";
import Link from "next/Link";
import React from "react";

interface MarqueeProps {
  //   hideSelf: boolean;
}

const Marquee: React.FC<MarqueeProps> = () => {
  return (
    <div
      id="marquee"
      className={classNames(
        // hideSelf ? "invisible" : "visible",
        "marquee w-full bg-secondary-200 motion-reduce:invisible block uppercase pt-2 text-black"
      )}>
      <div className="marquee__inner whitespace-nowrap" aria-hidden="true">
        <Link
          href="/about"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          &lt;&lt;&lt; contact us &gt;&gt;&gt;
        </Link>
        <a
          href="mailto:hello@pansy.press"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          click to email <span className="font-dingbats">J</span>
        </a>
        <a
          href="https://www.instagram.com/pansy_press/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          follow us on instagram <span className="font-dingbats">5</span>
        </a>
        <Link
          href="/about"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          &lt;&lt;&lt; contact us &gt;&gt;&gt;
        </Link>
        <a
          href="mailto:hello@pansy.press"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          click to email <span className="font-dingbats">J</span>
        </a>
        <a
          href="https://www.instagram.com/pansy_press/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          follow us on instagram <span className="font-dingbats">5</span>
        </a>
        <Link
          href="/about"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          &lt;&lt;&lt; contact us &gt;&gt;&gt;
        </Link>
        <a
          href="mailto:hello@pansy.press"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          click to email <span className="font-dingbats">J</span>
        </a>
        <a
          href="https://www.instagram.com/pansy_press/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          follow us on instagram <span className="font-dingbats">5</span>
        </a>
        <Link
          href="/about"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          &lt;&lt;&lt; contact us &gt;&gt;&gt;
        </Link>
        <a
          href="mailto:hello@pansy.press"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          click to email <span className="font-dingbats">J</span>
        </a>
        <a
          href="https://www.instagram.com/pansy_press/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center text-3xl">
          follow us on instagram <span className="font-dingbats">5</span>
        </a>
      </div>
    </div>
  );
};

export default Marquee;
