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
  const bigScreen = screenHeight > 740;
  const [hovered, setHovered] = useState<Book | null>(null);
  const [selected, setSelected] = useState(Book.notThere);
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

  const [top, setTop] = useState(bigScreen ? 370 : 250);

  const handleScroll = () => {
    const el = document.getElementById("book-info");
    const divTop = el?.getBoundingClientRect().top;

    divTop && setTop(divTop - 300);
  };

  useEffect(() => {
    setTop(bigScreen ? 370 : 250);
  }, [bigScreen]);

  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollable-div");

    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
      return () => {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

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
          className="override-top absolute text-right z-30 bg-white w-full bg-transparent lg:w-auto">
          <ul className="text-white hidden lg:block">
            <button
              id={Book.notThere}
              className={classNames("block lg:h-[64px]")}
              onClick={() => setSelected(Book.notThere)}>
              <li
                className={classNames(
                  selected === Book.notThere ? "italic" : "no-italic",
                  "py-10 book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                )}>
                <p className="min-[2200px]:right-[368px] lg:right-16 relative">
                  WHAT'S NOT THERE
                </p>
              </li>
            </button>
            <button
              id={Book.beforeMorning}
              className={classNames("block lg:h-[64px]")}
              onClick={() => setSelected(Book.beforeMorning)}>
              <li
                className={classNames(
                  selected === Book.beforeMorning ? "italic" : "no-italic",
                  "py-10 book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                )}>
                <p className="min-[2200px]:right-[368px] lg:right-16 relative">
                  BEFORE MORNING
                </p>
              </li>
            </button>
            {/* <button
              id={Book.creature}
              className={classNames("block lg:h-[64px]")}
              onClick={() => setSelected(Book.creature)}>
              <li
                className={classNames(
                  selected === Book.creature ? "italic" : "no-italic",
                  "book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                )}>
                CREATURE OF HABIT
              </li>
            </button> */}
            <button
              id={Book.poeming}
              className={classNames("block lg:h-[64px]")}
              onClick={() => setSelected(Book.poeming)}>
              <li
                className={classNames(
                  selected === Book.poeming ? "italic" : "no-italic",
                  "py-10 book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                )}>
                <p className="min-[2200px]:right-[368px] lg:right-16 relative">
                  POEMING
                </p>
              </li>
            </button>
          </ul>
        </nav>
        <div
          style={{
            height: `${screenHeight}px`,
          }}
          className={classNames(
            "override-screen-height overflow-scroll grid",
            "lg:overflow-hidden lg:grid-cols-2 lg:grid-rows-1",
            "min-[2200px]:mx-80"
          )}>
          <div
            style={{
              height: `${screenHeight}px`,
            }}
            id="scrollable-div"
            className="relative z-20 bg-primary-200 overflow-scroll">
            <h2
              className={classNames(
                "text-black",
                "text-left whitespace-nowrap text-small",
                "lg:text-medium lg:mt-[-50px]",
                "xl:mt-[-67px] xl:text-big"
              )}>
              BOOKS
            </h2>
            <ul className="text-white lg:hidden block mb-8">
              <button
                id={Book.notThere}
                className={classNames("block lg:h-[64px]")}
                onClick={() => setSelected(Book.notThere)}>
                <li
                  className={classNames(
                    selected === Book.notThere ? "italic" : "no-italic",
                    "book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                  )}>
                  WHAT'S NOT THERE
                </li>
              </button>
              <button
                id={Book.beforeMorning}
                className={classNames("block lg:h-[64px]")}
                onClick={() => setSelected(Book.beforeMorning)}>
                <li
                  className={classNames(
                    selected === Book.beforeMorning ? "italic" : "no-italic",
                    "book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                  )}>
                  BEFORE MORNING
                </li>
              </button>
              {/* <button
              id={Book.creature}
              className={classNames("block lg:h-[64px]")}
              onClick={() => setSelected(Book.creature)}>
              <li
                className={classNames(
                  selected === Book.creature ? "italic" : "no-italic",
                  "book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                )}>
                CREATURE OF HABIT
              </li>
            </button> */}
              <button
                id={Book.poeming}
                className={classNames("block lg:h-[64px]")}
                onClick={() => setSelected(Book.poeming)}>
                <li
                  className={classNames(
                    selected === Book.poeming ? "italic" : "no-italic",
                    "book-nav text-left lg:text-right text-3xl lg:text-small whitespace-nowrap hover:text-black hover:bg-white transition-color hover:tracking-widest w-screen"
                  )}>
                  POEMING
                </li>
              </button>
            </ul>
            <div
              id="book-info"
              className={classNames(
                "font-serif text-base lg:text-3xl mt-0 lg:mt-[300px] xl:mt-[250px] ml-2 lg:mr-12 lg:mx-12 relative pb-12"
              )}>
              {bookDescription}
            </div>
          </div>
          <div
            className="row-start-1 override-screen-height"
            style={{
              height: `${screenHeight}px`,
              overflow: "scroll",
            }}>
            {image && (
              <GatsbyImage image={image} alt="" className="object-cover" />
            )}
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

export default Books;
