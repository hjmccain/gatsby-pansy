// @ts-ignore
import hannahJeff from "../assets/images/hannah-jeff.jpg";

import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div
        className={classNames(
          "override-screen-height overflow-scroll grid h-full",
          "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="bg-primary-200 overflow-scroll pb-12">
          <h2
            className={classNames(
              "text-black",
              "text-left whitespace-nowrap text-small row-start-2",
              "lg:text-medium lg:mt-[-50px] lg:col-start-1 lg:row-start-1",
              "xl:mt-[-67px] xl:text-big"
            )}>
            ABOUT
          </h2>
          <div
            className={classNames(
              "text-2xl mx-2 md:mx-12 font-serif",
              "xl:text-justify"
            )}>
            <h3 className="text-2xl lg:text-4xl mb-6">
              HI, WE'RE PANSY PRESS!
            </h3>
            <p className="text-base lg:text-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              metus pellentesque, sodales dui sit amet, viverra ligula. Aenean
              consectetur elementum urna, in dictum mauris pulvinar et.
              Suspendisse mauris arcu, ultricies in ultricies quis, eleifend et
              nisl. Duis sed elit id lectus pretium pharetra at nec sapien. Cras
              sed tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
              rutrum vestibulum. Integer in libero felis. Donec libero sapien,
              ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
              id dolor mollis faucibus. Donec vitae varius eros. Phasellus
              cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
              eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
              dapibus. Curabitur at nisl enim.
            </p>
          </div>
        </div>
        <div className="row-start-1 override-screen-height h-full">
          <Image src={hannahJeff} alt="" className="object-cover lg:h-full" />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About Pansy Press</title>;

export default About;
