import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import useHandleWindowResize from "../hooks/useHandleWindowResize";

const About = () => {
  const screenHeight = useHandleWindowResize();

  return (
    <Layout>
      <div
        style={{
          height: `${screenHeight}px`,
          overflow: "hidden",
        }}
        className="grid grid-cols-2">
        <div className="bg-primary-200 overflow-scroll pb-12">
          <h2
            className={classNames(
              "text-left text-medium whitespace-nowrap text-white mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            ABOUT
          </h2>
          <div className="text-2xl mx-12 text-justify font-serif">
            <h3 className="text-4xl mb-6">HI, WE'RE PANSY PRESS!</h3>
            <p>
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
        <div
          style={{
            height: `${screenHeight}px`,
            overflow: "hidden",
          }}
          className="bg-[url(../assets/images/hannah-jeff.jpg)] bg-cover"></div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default About;
