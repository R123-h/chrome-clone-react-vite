import { useState, useEffect, useRef } from "react";
import Header from "./Component/header/Header";

import "../node_modules/rsuite/dist/rsuite.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Pages/Home";
function App() {
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const cardTop = cardRef.current.getBoundingClientRect().top;
        const headerHeight = document.querySelector(".header").offsetHeight;

        // Check if the top of the card is above the bottom of the header
        if (cardTop < headerHeight) {
          setIsVisible(false); // Hide header
        } else {
          setIsVisible(true); // Show header
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it initially to set the correct state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header isVisible={isVisible} />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <div className="App">
        {/* <Header isVisible={isVisible} /> */}
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Header isVisible={isVisible} />}>
                <Route index element={<Home cardRef={cardRef}/>} />
              </Route>
            </Routes>
          </BrowserRouter>
          {/* Other sections of your app */}
        </main>
      </div>
    </>
    // <div className="App">
    //   <Header isVisible={isVisible} />
    //   <main>
    //     {/* <section id="home">
    //       <h1>Home</h1>
    //       <p>Scroll down to see the header hide.</p>
    //     </section>
    //     <section id="features" ref={cardRef} className="card">
    //       <h1>Features</h1>
    //       <p>
    //         This is the card. Scroll past this section to see the header
    //         animation.
    //       </p>
    //     </section>
    //     <section id="download">
    //       <h1>Download</h1>
    //       <p>More content here...</p>
    //     </section> */}
    //   </main>
    // </div>
  );
}

export default App;
