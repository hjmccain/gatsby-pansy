import React, { useState } from "react";
import Layout from "../components/layout";
// @ts-ignore
import { StaticImage } from "gatsby-plugin-image";

const Events = () => {
  const [flyer, setFlyer] = useState(1);

  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen">
        <div className="relative z-20 bg-primary-200">
          <h2 className="mt-[-50px] text-left text-big whitespace-nowrap text-white">
            EVENTS
          </h2>
          <h4 className="text-2xl">UPCOMING</h4>
          <ul className="text-5xl">
            <li className="mb-12">
              <button
                className="text-left hover:bg-black hover:text-white transition-colors"
                onClick={() => setFlyer(1)}>
                <span className="italic">CREATURE OF HABIT</span> RELEASE PARTY
              </button>
            </li>
          </ul>
          <h4 className="text-2xl mb-4">PAST</h4>
          <h5 className="text-xl">2022</h5>
          <ul className="text-5xl">
            <li className="mb-12">
              <button
                className="text-left hover:bg-black hover:text-white transition-colors"
                onClick={() => setFlyer(2)}>
                POEM & IMAGE WORKSHOP
              </button>
            </li>
            <li className="mb-12">
              <button
                className="text-left hover:bg-black hover:text-white transition-colors"
                onClick={() => setFlyer(3)}>
                <span className="italic">BEFORE MORNING</span> RELEASE PARTY &
                KARAOKE NITE
              </button>
            </li>
            <h5 className="text-xl">2021</h5>
            <li className="mb-12">
              <button
                className="text-left hover:bg-black hover:text-white transition-colors"
                onClick={() => setFlyer(4)}>
                <span className="italic">POEMING</span> RELEASE PARTY
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="mx-12 mt-12 text-center">
            {flyer === 1 && (
              <StaticImage
                src="../assets/images/pansy-press-party-update.jpg"
                alt="Fyler"
              />
            )}
            {flyer === 2 && (
              <StaticImage
                src="../assets/images/poem-and-image-paper-size.jpg"
                alt="Fyler"
              />
            )}
            {flyer === 3 && (
              <StaticImage
                src="../assets/images/pansy-april-save-the-date.jpg"
                alt="Fyler"
              />
            )}
            {flyer === 4 && (
              <StaticImage
                src="../assets/images/pansy-press-party-update.jpg"
                alt="Fyler"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Pansy Press Events</title>;

export default Events;
