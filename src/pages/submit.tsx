import * as React from "react";
import Layout from "../components/layout";

const Submit = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen relative">
        <div className="z-10 overflow-scroll">
          <h2 className="mt-[-50px] text-left text-big whitespace-nowrap text-primary-200">
            SUBMIT
          </h2>
          <p className="text-2xl ml-6 mr-[10%] mb-6 font-body">
            If you're interested in submitting to Pansy Press, please read the
            submission guidelines &#38; info below. If everything looks good, go
            ahead and submit. We're excited to read your work :)
            <h3 className="font-sans mt-8 mb-2 w-full bg-primary-200 text-center">
              INFO
            </h3>
            For now, we are currently <b>only</b> publishing chapbook-length
            works by Tucson-based or Tucson-affiliated poets. You should submit
            if you (1) have 15-35 pages of poetry and (2) you either live in
            Tucson, used to live in Tucson, or have a particular connection with
            Tucson.
            <h3 className="font-sans mt-8 mb-2 w-full bg-primary-200 text-center">
              GUIDELINES
            </h3>
            Please email your submission to{" "}
            <a
              href="mailto: hello@pansy.press"
              target="_blank"
              rel="noreferrer noopener">
              hello@pansy.press
            </a>
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
            <h3 className="font-sans mt-8 mb-2 w-full bg-primary-200 text-center">
              ADD'L RESOURCES
            </h3>
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
        <div className="bg-[url(../assets/images/binding2.jpg)] bg-cover bg-no-repeat"></div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Submit to Pansy Press</title>;

export default Submit;
