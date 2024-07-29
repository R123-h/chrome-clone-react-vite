import { useState, useEffect } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useAnimation,
  useScroll
} from "framer-motion";
import "./Mosaic.css";

const images = [
  {
    src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp",
    srcSet:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-1.webp, /chrome/chrome/static/images/dev-components/chrome-gallery-1-2x.webp 2x",
  },
  {
    src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp",
    srcSet:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-2.webp, /chrome/chrome/static/images/dev-components/chrome-gallery-2-2x.webp 2x",
  },
  {
    src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp",
    srcSet:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-3.webp, /chrome/chrome/static/images/dev-components/chrome-gallery-3-2x.webp 2x",
  },
  {
    src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp",
    srcSet:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-4.webp, /chrome/chrome/static/images/dev-components/chrome-gallery-4-2x.webp 2x",
  },
  {
    src: "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp",
    srcSet:
      "https://www.google.com/chrome/static/images/dev-components/chrome-gallery-5.webp, /chrome/chrome/static/images/dev-components/chrome-gallery-5-2x.webp 2x",
  },
];

const Mosaic = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;

      if (currentScrollY > 200) {
        setShowSecondImage(true);
      } else {
        setShowSecondImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const x = useTransform(
  //   scrollY,
  //   [0, 1000],
  //   [0, scrollDirection === "down" ? -500 : 500]
  // );

  // const yTransforms = images.map((_, index) =>
  //   useTransform(
  //     scrollY,
  //     [0, 1000],
  //     [0, scrollDirection === "up" ? (index % 2 === 0 ? -100 : 100) : 0]
  //   )
  // );

  return (
    <div>
      <div className="chr-mosaic d-none d-lg-flex">
        <div className="chr-mosaic__wrapper">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`chr-mosaic__item ${
                index === 0 || index === 3
                  ? "chr-mosaic__item--up"
                  : "chr-mosaic__item--down"
              }`}
              initial={{
                opacity: index === 1 ? 0 : 1,
                y: index === 0 || index === 3 ? -100 : 100, // Position images up and down
                scale: 1,
                display: index === 1 ? "none" : "flex",
                marginTop: showSecondImage
                  ? 0
                  : index === 0 || index === 3
                  ? "20px"
                  : "20px",
                marginBottom: showSecondImage ? 0 : 100,
              }}
              animate={{
                opacity: showSecondImage || index !== 1 ? 1 : 0,
                y: showSecondImage
                  ? 0
                  : index === 0 || index === 3
                  ? -100
                  : 100,

                scale: 1,
                display: showSecondImage || index !== 1 ? "flex" : "none",
                marginTop: showSecondImage
                  ? 0
                  : index === 0 || index === 3
                  ? "100px"
                  : "30px",
              }}
              // style={{ scaleY: scrollY }}

              // style={{ y: yTransforms[index] }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`chr-mosaic__image-container`}>
                <img src={image.src} srcSet={image.srcSet} aria-hidden="true"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mosaic;
