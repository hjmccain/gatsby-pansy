import hannahJeff from "../../public/assets/images/hannah-jeff-copy.jpg";

import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Layout from "../components/layout";
import about from "../copy/about";

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
            <p className="text-base lg:text-2xl">{about}</p>
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
