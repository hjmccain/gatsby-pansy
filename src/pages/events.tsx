import React, { useState } from "react";
import Layout from "../components/layout";
// @ts-ignore
import { GatsbyImage } from "gatsby-plugin-image";
import useHandleWindowResize from "../hooks/useHandleWindowResize";
import { useStaticQuery, graphql } from "gatsby";
import findImage from "../helpers/findImage";
import classNames from "classnames";

enum Event {
  beforeMorningRelease = "beforeMorningRelease",
  creatureRelease = "creatureRelease",
  poemingRelease = "poemingRelease",
  poemAndImageWorkshop = "poemAndImageWorkshop",
}

const Events = () => {
  const screenHeight = useHandleWindowResize();
  const [selected, setSelected] = useState(Event.creatureRelease);
  const { allFile } = useStaticQuery(graphql`
    query imageQuery {
      allFile {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);
  const image = findImage(allFile, selected);

  return (
    <Layout>
      <div
        style={{
          height: `${screenHeight}px`,
        }}
        className={classNames(
          "overflow-scroll",
          "lg:grid lg:grid-cols-2 lg:grid-rows-1"
        )}>
        <div className="relative z-20 bg-primary-200 overflow-scroll pb-12">
          <h2
            className={classNames(
              "text-left whitespace-nowrap text-white text-small",
              "lg:text-medium lg:mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            EVENTS
          </h2>
          <div className="ml-4 lg:ml-12 mr-4">
            <h4 className="text-3xl text-white">UPCOMING</h4>
            <ul className="text-5xl">
              <li id={Event.creatureRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white transition-colors"
                  onClick={() => setSelected(Event.creatureRelease)}>
                  <span className="italic">CREATURE OF HABIT</span> RELEASE
                  PARTY
                </button>
                {selected === Event.creatureRelease && (
                  <p className="font-serif text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
            </ul>
            <h4 className="text-3xl text-white">PAST</h4>
            <ul className="text-5xl">
              <li id={Event.poemAndImageWorkshop} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white transition-colors"
                  onClick={() => setSelected(Event.poemAndImageWorkshop)}>
                  POEM & IMAGE WORKSHOP
                </button>
                {selected === Event.poemAndImageWorkshop && (
                  <p className="font-serif text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
              <li id={Event.beforeMorningRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white transition-colors"
                  onClick={() => setSelected(Event.beforeMorningRelease)}>
                  <span className="italic">BEFORE MORNING</span> RELEASE PARTY &
                  KARAOKE NITE
                </button>
                {selected === Event.beforeMorningRelease && (
                  <p className="font-serif text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
              <li id={Event.poemingRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white transition-colors"
                  onClick={() => setSelected(Event.poemingRelease)}>
                  <span className="italic">POEMING</span> RELEASE PARTY
                </button>
                {selected === Event.poemingRelease && (
                  <p className="font-serif text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            height: `${screenHeight}px`,
            overflow: "scroll",
          }}>
          {image && (
            <GatsbyImage image={image} alt="" className="object-cover" />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Pansy Press Events</title>;

const eventDescriptions = {
  [Event.beforeMorningRelease]: `Before Morning is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Event.creatureRelease]: `Creature of Habit is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Event.poemAndImageWorkshop]: `POEMING is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Event.poemingRelease]: `What's Not There is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
};

export default Events;
