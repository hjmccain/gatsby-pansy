import classNames from "classnames";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import useHandleWindowResize from "../hooks/useHandleWindowResize";

const About = () => {
  const screenHeight = useHandleWindowResize();

  return (
    <Layout>
      <div
        key={screenHeight}
        style={{
          height: `${screenHeight}px`,
        }}
        className={classNames(
          "overflow-scroll",
          "lg:overflow-hidden lg:grid lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="bg-primary-200 overflow-scroll pb-12">
          <h2
            className={classNames(
              "text-black",
              "text-left whitespace-nowrap text-small",
              "lg:text-medium lg:mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            ABOUT
          </h2>
          <div
            className={classNames(
              "text-2xl mx-2 md:mx-12 font-serif",
              "xl:text-justify"
            )}>
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
            overflow: "scroll",
          }}>
          <StaticImage
            src="../assets/images/hannah-jeff.jpg"
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About Pansy Press</title>;

export default About;
