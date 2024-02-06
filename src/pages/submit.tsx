import submitIllustration from "../../public/assets/images/submit-illustration.jpg";

import classNames from "classnames";
import Image from "next/image";
import * as React from "react";
import Layout from "../components/layout";

const Submit = () => {
  return (
    <Layout>
      <div
        className={classNames(
          "override-screen-height overflow-scroll grid h-full mb-16",
          "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="z-10 overflow-scroll bg-primary-200 pb-16">
          <h2
            className={classNames(
              "text-black",
              "text-left whitespace-nowrap text-small",
              "lg:text-medium lg:mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            SUBMIT
          </h2>
          <p className="lg:text-xl mx-2 lg:mx-12 mb-6 font-serif">
            <p className="lg:text-2xl border-b border-black pb-6">
              If you're interested in submitting to Pansy Press, please read the
              submission guidelines &#38; info below. (We know it's a lot!)
              We're excited to read your work &lt;3
            </p>
            <h3 className="mt-8 mb-6 text-4xl">INFO</h3>
            We are accepting submissions for (1) chapbooks and (2) individual
            poems for the PANSY REVIEW, forthcoming in Winter 2024.
            <br />
            <br />
            <span className="italic">
              Note: we do accept simultaneous submissions, but please email us
              if your work is accepted elsewhere while you're waiting on a
              response from us.
            </span>
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
            <ul className="">
              <li className="my-2 ml-8">
                - In the subject line of your email, write "chapbook" if you are
                submitting poems to be considered for chapbook publication, or
                "journal" if you are submitting individual poems to the Pansy
                Review.
              </li>
            </ul>
            <div className="italic underline mt-2 mb-2">
              In the body of your email, include…
            </div>
            <ul className="">
              <li className="my-2 ml-8">- Your name</li>
              <li className="my-2 ml-8">- Your pronouns</li>
              <li className="my-2 ml-8">
                - An attachment with a sample of 3-5 poems. Further:
                <li className="my-2 pl-12">
                  - Please put all poems in ONE file, begin each poem on a new
                  page, and attach the file as a Word (.doc / .docx) or PDF
                  (.pdf) document.
                </li>
                <li className="my-2 pl-12">
                  - If the poems are part of a chapbook collection, pick a few
                  poems that represent the theme and scope of your work, so we
                  can get a feel for the collection.
                </li>
                <li className="my-2 pl-12">
                  - <span className="italic">Important:</span> If you are
                  submitting to the Pansy Review, we{" "}
                  <span className="italic">only accept unpublished poems</span>.
                  If you are submitting a chapbook, it is fine if some or all of
                  the poems have been previously published elsewhere.
                </li>
              </li>
            </ul>
            <div className="italic underline mt-2 mb-2">
              If you want, you can also include:
            </div>
            <ul className="">
              <li className="my-2 ml-8">
                - A short bio. If there is biographical information that you
                would like to share, please do so :)
              </li>
              <li className="my-2 ml-8">
                - If submitting a chapbook, a few sentences putting the chapbook
                into context.
              </li>
            </ul>
            <h3 className="mt-8 mb-6 text-4xl">ADD'L RESOURCES</h3>
            <ul className="">
              <li className="my-2 ml-8">
                <a
                  className="underline"
                  href="https://medium.com/write-wild/crafting-a-small-poetry-collection-635347c913d2"
                  target="_blank"
                  rel="noreferrer noopener">
                  How do I write a chapbook?
                </a>
              </li>
              <li className="my-2 ml-8">
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
