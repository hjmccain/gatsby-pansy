import beforeMorningRelease from "../../public/assets/images/beforeMorningRelease.jpg";
import creatureRelease from "../../public/assets/images/creatureRelease.png";
import poemingRelease from "../../public/assets/images/poemingRelease.jpg";
import poemAndImageWorkshop from "../../public/assets/images/poemAndImageWorkshop.jpg";
import eventDescriptions from "../copy/events";

import React, { useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import classNames from "classnames";

enum Event {
  beforeMorningRelease = "beforeMorningRelease",
  creatureRelease = "creatureRelease",
  poemingRelease = "poemingRelease",
  poemAndImageWorkshop = "poemAndImageWorkshop",
}

const Events = () => {
  const [selected, setSelected] = useState<Event | null>(Event.creatureRelease);
  const getImage = () => {
    switch (selected) {
      case Event.beforeMorningRelease: {
        return <Image src={beforeMorningRelease} alt="" />;
      }
      case Event.creatureRelease: {
        return <Image src={creatureRelease} alt="" />;
      }
      case Event.poemingRelease: {
        return <Image src={poemingRelease} alt="" />;
      }
      default:
      case Event.poemAndImageWorkshop: {
        return <Image src={poemAndImageWorkshop} alt="" />;
      }
    }
  };
  const image = getImage();

  return (
    <Layout>
      <div
        className={classNames(
          "override-screen-height overflow-scroll grid h-full mb-16",
          "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
          "min-[2200px]:mx-80"
        )}>
        <div className="relative z-20 bg-primary-200 overflow-scroll pb-16">
          <h2
            className={classNames(
              "text-black",
              "text-left whitespace-nowrap text-small",
              "lg:text-medium lg:mt-[-50px]",
              "xl:mt-[-67px] xl:text-big"
            )}>
            EVENTS
          </h2>
          <div className="ml-4 lg:ml-12 mr-4">
            <h4 className="text-3xl text-white-alt">UPCOMING</h4>
            <ul className="text-5xl">
              <li id={Event.creatureRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white-alt transition-colors mb-4"
                  onClick={() =>
                    selected === Event.creatureRelease
                      ? setSelected(null)
                      : setSelected(Event.creatureRelease)
                  }>
                  <span className="italic">CREATURE OF HABIT</span> RELEASE
                  PARTY
                </button>
                {selected === Event.creatureRelease && (
                  <p className="font-serif text-base lg:text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
            </ul>
            <h3 className="text-3xl text-white-alt">PAST</h3>
            <ul className="text-5xl">
              <li id={Event.poemAndImageWorkshop} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white-alt transition-colors mb-4"
                  onClick={() =>
                    selected === Event.poemAndImageWorkshop
                      ? setSelected(null)
                      : setSelected(Event.poemAndImageWorkshop)
                  }>
                  POEM & IMAGE WORKSHOP
                </button>
                {selected === Event.poemAndImageWorkshop && (
                  <p className="font-serif text-base lg:text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
              <li id={Event.beforeMorningRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white-alt transition-colors mb-4"
                  onClick={() =>
                    selected === Event.beforeMorningRelease
                      ? setSelected(null)
                      : setSelected(Event.beforeMorningRelease)
                  }>
                  <span className="italic">BEFORE MORNING</span> RELEASE PARTY &
                  KARAOKE NITE
                </button>
                {selected === Event.beforeMorningRelease && (
                  <p className="font-serif text-base lg:text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
              <li id={Event.poemingRelease} className="mb-12">
                <button
                  className="text-left hover:bg-black hover:text-white-alt transition-colors mb-4"
                  onClick={() =>
                    selected === Event.poemingRelease
                      ? setSelected(null)
                      : setSelected(Event.poemingRelease)
                  }>
                  <span className="italic">POEMING</span> RELEASE PARTY
                </button>
                {selected === Event.poemingRelease && (
                  <p className="font-serif text-base lg:text-2xl">
                    {eventDescriptions[selected]}
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="row-start-1 override-screen-height h-full bg-primary-200 pb-36">
          {image}
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Pansy Press Events</title>;

export default Events;
