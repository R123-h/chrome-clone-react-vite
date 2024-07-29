import { useEffect, useRef } from "react";
import "./home.css";
import { Nav } from "react-bootstrap";
import Mosaic from "./Mosaic";
import Fast from "./Fast";
 
function Home({ cardRef }) {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > navRef.current.offsetTop) {
          navRef.current.classList.add("sticky");
        } else {
          navRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const targetRef = useRef(null);

  const handleScrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="container p-5">
        <div className="m-auto pt-4">
          <div className="d-flex justify-content-center">
            <img
              src="https://www.google.com/chrome/static/images/chrome-logo-m100.svg"
              alt="main logo"
              height={45}
            />
          </div>
          <h1 className="chr-headline-0 chr-chrome-hero__heading">
            <span>The browser</span>
            <br />
            <span>built to be yours</span>
          </h1>
        </div>
        <div className="mt-3" ref={cardRef}>
          <div className="contentbar d-none d-lg-flex hidden" ref={navRef}>
            <ul className="containerbarlist p-2">
              <Nav className="d-flex align-items-center d-none d-lg-flex">
                <Nav.Item className="containerbarlist-item">
                  <Nav.Link className="text-muted text-decoration-none mainlogo d-flex align-items-center p-0 me-2">
                    <span>Update</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="containerbarlist-item">
                  <Nav.Link className="text-muted text-decoration-none mainlogo d-flex align-items-center p-0 me-2">
                    <span>Yours</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="containerbarlist-item">
                  <Nav.Link className="text-muted text-decoration-none mainlogo d-flex align-items-center p-0 me-2">
                    <span>Safe</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="containerbarlist-item" onClick={handleScrollToTarget}>
                  <Nav.Link className="text-muted text-decoration-none mainlogo d-flex align-items-center p-0 me-2">
                    <span>Fast</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="containerbarlist-item">
                  <Nav.Link className="text-muted text-decoration-none mainlogo d-flex align-items-center p-0 me-2">
                    <span>By Google</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </ul>
          </div>
          <span className="contentbar card-hidden" style={{ fontSize: "12px" }}>
            Need the Chrome installer?{" "}
            <a href="/" className="text-decoration-none ms-1">
              Download here
            </a>
          </span>
        </div>
      </div>
     <div >
     <Mosaic />
     </div>
      <div className="mt-5" style={{marginBottom:"100px",minHeight: "600px"}} >
        <Fast targetRef={targetRef}/>
      </div>
    </>
  );
}

export default Home;
