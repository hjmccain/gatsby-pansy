import submitIllustration from "../../public/assets/images/submit-illustration.jpg";

import classNames from "classnames";
import Image from "next/image";
import * as React from "react";
import Layout from "../components/layout";
import submit from "../copy/submit";

const Submit = () => {
  return (
    <Layout>
      <div
        className={classNames(
          "override-screen-height overflow-scroll grid h-full mb-16",
          "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="z-10 overflow-scroll bg-primary-200">
          <h2
            className={classNames(
              "text-black",
              "text-left whitespace-nowrap text-small",
              "lg:text-medium lg:mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            SUBMIT
          </h2>
          {submit}
        </div>
        <div className="row-start-1 override-screen-height h-full">
          <Image
            src={submitIllustration}
            alt=""
            className="object-cover lg:h-full"
          />
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Submit to Pansy Press</title>;

export default Submit;
