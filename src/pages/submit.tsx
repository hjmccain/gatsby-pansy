// @ts-ignore
import submitIllustration from "../assets/images/submit-illustration.jpg";

import classNames from "classnames";
import Image from "next/Image";
import * as React from "react";
import Layout from "../components/layout";

const Submit = () => {
  return (
    <Layout>
      <div
        className={classNames(
          "override-screen-height overflow-scroll grid h-full",
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
          <p className="lg:text-2xl mx-2 lg:mx-12 mb-6 font-serif">
            If you're interested in submitting to Pansy Press, please read the
            submission guidelines &#38; info below. If everything looks good, go
            ahead and submit. We're excited to read your work :)
            <h3 className="mt-8 mb-6 text-4xl">INFO</h3>
            For now, we are currently only publishing chapbook-length works by
            Tucson-based or Tucson-affiliated poets. You should submit if you
            (1) have 15-35 pages of poetry and (2) you either live in Tucson,
            used to live in Tucson, or have a particular connection with Tucson.
            <h3 className="mt-8 mb-6 text-4xl">GUIDELINES</h3>
            ** Please email your submission to{" "}
            <a
              className="underline hover:text-white hover:bg-black"
              href="mailto: hello@pansy.press"
              target="_blank"
              rel="noreferrer noopener">
              hello@pansy.press
            </a>{" "}
            **
            <br />
            <br />
            <div className="italic underline mt-2 mb-2">
              {" "}
              In your submission, please include the following required
              information:
            </div>
            <ul className="list-disc">
              <li className="ml-8">Your name</li>
              <li className="ml-8">Your pronouns</li>
              <li className="ml-8">
                A short description of your connection to Tucson
              </li>
              <li className="ml-8">
                An attachment with a sample of 3-6 poems from your
                chapbook-length collection. Pick a few poems that represent the
                theme and scope of your work, so we can get a feel for the
                collection. Please includes all poems in ONE file, begin each
                poem on a new page, and attach the file as a Word (.doc / .docx)
                or PDF (.pdf) document.
              </li>
            </ul>
            <div className="italic underline mt-2 mb-2">
              If you want, you can also include:
            </div>
            <ul className="list-disc">
              <li className="ml-8">
                A short bio. If there is biographical information that you would
                like to share, please do so :)
              </li>
            </ul>
            <h3 className="mt-8 mb-6 text-4xl">ADD'L RESOURCES</h3>
            <ul className="list-disc">
              <li className="ml-8">
                <a
                  className="underline"
                  href="https://medium.com/write-wild/crafting-a-small-poetry-collection-635347c913d2"
                  target="_blank"
                  rel="noreferrer noopener">
                  How do I write a chapbook?
                </a>
              </li>
              <li className="ml-8">
                <a
                  className="underline"
                  href="https://www.masterclass.com/articles/how-to-format-and-submit-your-poetry-manuscript#how-to-format-your-manuscript"
                  target="_blank"
                  rel="noreferrer noopener">
                  How should I format my poetry sample?
                </a>
                &nbsp;(Note: These are general guidelines, and you don't need to
                include a cover page for us.)
              </li>
            </ul>
          </p>
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
