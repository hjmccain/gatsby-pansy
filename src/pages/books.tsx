import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Layout from "../components/layout";

enum Book {
  beforeMorning = "beforeMorning",
  creature = "creature",
  poeming = "poeming",
  notThere = "notThere",
}

const Books = () => {
  const [selected, setSelected] = useState(Book.beforeMorning);
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen">
        <div className="relative z-20">
          <h2 className="mt-[-50px] text-left text-big whitespace-nowrap text-primary-200">
            BOOKS
          </h2>
          <nav>
            <ul>
              <button
                className="block h-[60px]"
                onClick={() => setSelected(Book.beforeMorning)}>
                <li className="text-left text-medium whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest w-screen">
                  BEFORE MORNING
                </li>
              </button>
              <button
                className="block h-[60px]"
                onClick={() => setSelected(Book.creature)}>
                <li className="text-left text-medium whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest w-screen">
                  CREATURE OF HABIT
                </li>
              </button>
              <button
                className="block h-[60px]"
                onClick={() => setSelected(Book.poeming)}>
                <li className="text-left text-medium whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest w-screen">
                  POEMING
                </li>
              </button>
              <button
                className="block h-[60px]"
                onClick={() => setSelected(Book.notThere)}>
                <li className="text-left text-medium whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest w-screen">
                  WHAT'S NOT THERE
                </li>
              </button>
            </ul>
          </nav>
          <div className="font-body text-2xl mt-[60px] mx-12">
            Duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
            tortor id turpis imperdiet auctor. Nam aliquet massa non nisl rutrum
            vestibulum. Integer in libero felis. Donec libero sapien,
            ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum id
            dolor mollis faucibus. Donec vitae varius eros. Phasellus cursus
            nibh a feugiat venenatis. In sed porta velit. Donec nec eleifend
            neque. Fusce tincidunt turpis bibendum elit vehicula dapibus.
            Curabitur at nisl enim.
          </div>
        </div>
        {selected === Book.beforeMorning && (
          <div className="bg-primary-200">
            <StaticImage src="../assets/images/before-morning.jpg" alt="" />
          </div>
        )}
        {selected === Book.notThere && (
          <div className="bg-primary-200">
            <StaticImage src="../assets/images/whats-not-there.jpg" alt="" />
          </div>
        )}
        <div className="bg-primary-200"></div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Pansy Press Books</title>;

export default Books;
