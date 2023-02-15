import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import findImage from "../helpers/findImage";
import useHandleWindowResize from "../hooks/useHandleWindowResize";

enum Book {
  beforeMorning = "beforeMorning",
  creature = "creature",
  poeming = "poeming",
  notThere = "notThere",
}

const Books = () => {
  const screenHeight = useHandleWindowResize();
  const top = useHandleScroll(320, "book-info");
  const [hovered, setHovered] = useState<Book | null>(null);
  const [selected, setSelected] = useState(Book.beforeMorning);
  const bookDescription = hovered
    ? bookDescriptions[hovered]
    : bookDescriptions[selected];
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
  const image = findImage(allFile, hovered || selected);

  useEffect(() => {
    function handleHover(e: MouseEvent) {
      if ((e.target as HTMLElement)?.classList.contains("book-nav")) {
        const id = ((e.target as HTMLElement)?.parentNode as HTMLElement)?.id;

        id && setHovered(id as Book);
      } else {
        setHovered(null);
      }
    }

    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mouseover", handleHover);
    };
  });

  return (
    <Layout>
      <div>
        <nav
          style={{
            top: `${top}px`,
          }}
          className="absolute left-0 z-30">
          <ul>
            <button
              id={Book.beforeMorning}
              className={classNames("block h-[64px]")}
              onClick={() => setSelected(Book.beforeMorning)}>
              <li
                className={classNames(
                  "book-nav text-left text-small whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest hover:w-screen"
                )}>
                BEFORE MORNING
              </li>
            </button>
            <button
              id={Book.creature}
              className={classNames("block h-[64px]")}
              onClick={() => setSelected(Book.creature)}>
              <li
                className={classNames(
                  "book-nav text-left text-small whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest hover:w-screen"
                )}>
                CREATURE OF HABIT
              </li>
            </button>
            <button
              id={Book.poeming}
              className={classNames("block h-[64px]")}
              onClick={() => setSelected(Book.poeming)}>
              <li
                className={classNames(
                  "book-nav text-left text-small whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest hover:w-screen"
                )}>
                POEMING
              </li>
            </button>
            <button
              id={Book.notThere}
              className={classNames("block h-[64px]")}
              onClick={() => setSelected(Book.notThere)}>
              <li
                className={classNames(
                  "book-nav text-left text-small whitespace-nowrap hover:text-white hover:bg-black transition-color hover:tracking-widest hover:w-screen"
                )}>
                WHAT'S NOT THERE
              </li>
            </button>
          </ul>
        </nav>
        <div
          style={{
            height: `${screenHeight}px`,
            overflow: "hidden",
          }}
          className="grid grid-cols-2">
          <div
            style={{
              height: `${screenHeight}px`,
            }}
            id="scrollable-div"
            className="relative z-20 bg-primary-200 overflow-scroll">
            <h2
              className={classNames(
                "text-left text-medium whitespace-nowrap text-white mt-[-50px]",
                "xl:mt-[-67px] xl:text-big"
              )}>
              BOOKS
            </h2>
            <div
              id="book-info"
              className={classNames(
                "font-serif text-3xl mt-[300px] xl:mt-[250px] mx-12 relative pb-12"
              )}>
              {bookDescription}
            </div>
          </div>
          <div
            style={{
              height: `${screenHeight}px`,
              overflow: "hidden",
            }}
            className="bg-primary-200">
            {image && <GatsbyImage image={image} alt="" />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Pansy Press Books</title>;

const bookDescriptions = {
  [Book.beforeMorning]: `Before Morning is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Book.creature]: `Creature of Habit is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Book.poeming]: `POEMING is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
  [Book.notThere]: `What's Not There is duis sed elit id lectus pretium pharetra at nec sapien. Cras sed
  tortor id turpis imperdiet auctor. Nam aliquet massa non nisl
  rutrum vestibulum. Integer in libero felis. Donec libero sapien,
  ullamcorper ut aliquet non, molestie quis ex. Sed volutpat ipsum
  id dolor mollis faucibus. Donec vitae varius eros. Phasellus
  cursus nibh a feugiat venenatis. In sed porta velit. Donec nec
  eleifend neque. Fusce tincidunt turpis bibendum elit vehicula
  dapibus. Curabitur at nisl enim.`,
};

const useHandleScroll = (startValue: number, idToFind: string) => {
  const [top, setTop] = useState(startValue);

  const handleScroll = () => {
    const el = document.getElementById(idToFind);
    const divTop = el?.getBoundingClientRect().top;

    divTop && setTop(divTop - 300);
  };

  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
      return () => {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return top;
};

export default Books;
