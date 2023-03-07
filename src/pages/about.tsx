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
          "override-screen-height overflow-scroll grid h-full mb-16",
          "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="bg-primary-200 overflow-scroll pb-16">
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
            <h3 className="mb-6 text-4xl">WHO WE ARE</h3>
            <p className="text-base lg:text-2xl">
              Hannah Joyce (she/her) and Jeff Evans (he/him) started Pansy Press
              in the summer of 2021 when Jeff texted Hannah, whom he hadn't seen
              in almost a year, and said, "Hey, would you want to start a poetry
              press?" and the enthusastic response was "YES."
              <br />
              <br />
              Pansy was conceived of as a space where poetry could grow &
              breathe in real time, and in real life. So often, poetry is
              relegated to spaces of academia — which are amazing, but often
              inaccesible or intimidating. We think of Pansy as analogous to a
              local band putting out tapes of their own music & their friends'.
              It's DIY. It's perhaps unpolished (but it's a lot of fun). Most
              importantly, it's by & for the community that it is a part of.
              <br />
              <br />
              Today, Pansy is mostly about poetry, but it's also a little bit
              about every creative pursuit happening at the local level within
              the living & breathing community of active artists that Hannah &
              Jeff are a part of. It's about the art that's happening in your
              backyard, being created by people you know. What a fucking
              privilege and an honor! Pansy Press is so glad to know you, and if
              we don't know you, we want to meet you. Pansy is art in community.
              Come join us :)
            </p>

            <h3 className="mt-8 mb-6 text-4xl">VALUES</h3>
            <p className="text-base lg:text-2xl">
              1. COMMUNITY: Pansy Press is a collaborative space emerging
              organically from the art community here in Tucson. We exist at the
              intersection of art & community, and in our practice we strive to
              build a space where all feel welcome.
              <br />
              <br />
              2. ANTICAPITALISM: Pansy Press is an anticapitalist project. We
              will never prioritize profits over people. All of our events and
              products are priced to be as accessible as possible, while
              hopefully also allowing us to not lose too much money of our own
              on this labor of love :). If an event or product is priced at an
              inaccessible level to you, reach out to us and we will work
              something out. Money should never be a barrier to engaging with
              our work.
              <br />
              <br />
              3. SUSTAINABILITY: Both in the environmental sense and the
              personal sense, Pansy Press rejects the paradigms of "business"
              and "busyness." We collaborate with local artists and printers. We
              take time to rest. We answer emails and ship products on a
              sustainable schedule. And we invite you to move at a slower pace
              with us.
            </p>
            <h3 className="mt-8 mb-6 text-4xl inline-block mr-4">
              CONTACT US &gt;&gt;{" "}
            </h3>

            <p className="text-base lg:text-2xl inline">
              <a
                href="mailto:hello@pansy.press"
                className="w-[45rem] hover:underline hover:italic whitespace-nowrap text-center lg:text-3xl">
                hello@pansy.press <span className="font-dingbats">J</span>
              </a>
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
