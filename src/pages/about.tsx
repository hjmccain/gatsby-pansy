import * as React from "react";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen">
        <div className="bg-primary-200">
          <h2 className="mt-[-50px] text-left text-big whitespace-nowrap text-white">
            ABOUT
          </h2>
          <p className="text-2xl mx-12 text-justify font-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            metus pellentesque, sodales dui sit amet, viverra ligula. Aenean
            consectetur elementum urna, in dictum mauris pulvinar et.
            Suspendisse mauris arcu, ultricies in ultricies quis, eleifend et
            nisl. Duis sed elit id lectus pretium pharetra at nec sapien. Cras
            sed tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
            rutrum vestibulum. Integer in libero felis. Donec libero sapien,
            ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum id
            dolor mollis faucibus. Donec vitae varius eros. Phasellus cursus
            nibh a feugiat venenatis. In sed porta velit. Donec nec eleifend
            neque. Fusce tincidunt turpis bibendum elit vehicula dapibus.
            Curabitur at nisl enim.
          </p>
        </div>
        <div className="bg-[url(../assets/images/hannah-jeff.jpg)] bg-cover"></div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default About;
