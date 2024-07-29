import { useState, useEffect, useRef } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Fast = ({ targetRef }) => {
  const [scrollCount, setScrollCount] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const lastScrollTop = useRef(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const direction = scrollPosition > lastScrollTop.current ? "down" : "up";
      lastScrollTop.current = scrollPosition;

      // Increment scroll count based on scroll direction
      if (direction === "down") {
        setScrollCount((prevCount) => Math.min(prevCount + 1, 2)); // Limit to 2 scrolls
      } else {
        setScrollCount((prevCount) => Math.max(prevCount - 1, 0)); // Decrease count when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollCount >= 2) {
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  }, [scrollCount]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 3,
    width :"459px"
  };
  return (
    <div
      className="mt-5 position-relative"
      style={{ minHeight: "400px" }}
      ref={targetRef}
    >
      <div className="d-flex justify-content-center">
        <h1 className="chr-headline-0 chr-chrome-hero__heading">
          <span>
            The{" "}
            <button
              className="btn rounded-pill btn-lg mx-2"
              style={{ background: "#ceead6", color: "#188038" }}
            >
              <FaTachometerAlt size={50} color="#4CAF50" className="me-2" />
              Fast
            </button>
            way to do
          </span>
          <br />
          <span>things online</span>
        </h1>
      </div>

      <div className="d-flex justify-content-center">
        <motion.div
          className="d-flex justify-content-center position-absolute top-1 left-0 w-100 h-100"
          initial={{ opacity: 2 }}
          animate={{ opacity: showCard ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          ref={videoRef}
        >
          <video
            aria-hidden="true"
            poster="/chrome/chrome/static/images/dev-components/home-poster-2x.webp"
            style={{
              width: "50%",
              boxShadow: "rgba(32, 33, 36, 0.1) 0px 8px 20px 0px",
              objectFit: "cover",
            }}
            muted
            playsInline
            preload="none"
          >
            <source
              type="video/webm"
              src="/chrome/chrome/static/videos/dev-components/non-chrome.webm"
            />
            <source
              type="video/mp4"
              src="/chrome/chrome/static/videos/dev-components/non-chrome.mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {showCard && (
          <motion.div
            className=" w-100 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{paddingLeft:"500px"}}
          >
            <div className="slider-container" style={{ width: '120%', padding: '20px' }}>
              <Slider {...settings}>
                <div style={{ width: 100  }}>
                  <div className="card " style={{marginRight:"150px"}}>
                    <div className="card-body p-5">
                      <div className="d-flex">
                        <h5>Prioritise performance</h5>
                        <span>
                          Chrome is built for performance. Optimise your
                          experience with features like Energy Saver and Memory
                          Saver.
                        </span>
                      </div>
                    </div>
                    <video
                      aria-hidden="true"
                      poster="/chrome/chrome/static/images/dev-components/home-poster-2x.webp"
                      style={{
                        width: "100%",
                        boxShadow: "rgba(32, 33, 36, 0.1) 0px 8px 20px 0px",
                        objectFit: "cover",
                      }}
                      muted
                      playsInline
                      preload="none"
                    >
                      <source
                        type="video/webm"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.webm"
                      />
                      <source
                        type="video/mp4"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div>
                <div className="card " style={{marginRight:"150px"}}>
                    <div className="card-body p-5">
                      <div className="d-flex">
                        <h5>Prioritise performance</h5>
                        <span>
                          Chrome is built for performance. Optimise your
                          experience with features like Energy Saver and Memory
                          Saver.
                        </span>
                      </div>
                    </div>
                    <video
                      aria-hidden="true"
                      poster="/chrome/chrome/static/images/dev-components/home-poster-2x.webp"
                      style={{
                        width: "100%",
                        boxShadow: "rgba(32, 33, 36, 0.1) 0px 8px 20px 0px",
                        objectFit: "cover",
                      }}
                      muted
                      playsInline
                      preload="none"
                    >
                      <source
                        type="video/webm"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.webm"
                      />
                      <source
                        type="video/mp4"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div>
                <div className="card " style={{marginRight:"150px"}}>
                    <div className="card-body p-5">
                      <div className="d-flex">
                        <h5>Prioritise performance</h5>
                        <span>
                          Chrome is built for performance. Optimise your
                          experience with features like Energy Saver and Memory
                          Saver.
                        </span>
                      </div>
                    </div>
                    <video
                      aria-hidden="true"
                      poster="/chrome/chrome/static/images/dev-components/home-poster-2x.webp"
                      style={{
                        width: "100%",
                        boxShadow: "rgba(32, 33, 36, 0.1) 0px 8px 20px 0px",
                        objectFit: "cover",
                      }}
                      muted
                      playsInline
                      preload="none"
                    >
                      <source
                        type="video/webm"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.webm"
                      />
                      <source
                        type="video/mp4"
                        src="/chrome/chrome/static/videos/dev-components/non-chrome.mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
               
              </Slider>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Fast;
