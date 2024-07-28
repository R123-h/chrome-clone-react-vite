import { motion } from "framer-motion";
import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";
import { Nav, Offcanvas, } from "react-bootstrap";
import { useState } from "react";
import { Dropdown } from "rsuite";
import { FiAlignJustify } from "react-icons/fi";

const Header = ({ isVisible }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.header
        className="header d-flex align-items-center"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="header-content container-fluid p-0">
          <Nav className="d-flex align-items-center">
            <Nav.Item>
              <span className="d-lg-none cursor ms-3" onClick={handleShow}>
                <FiAlignJustify />
              </span>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/"
                className="Navtabsactive text-decoration-none mainlogo d-flex align-items-center ms-2"
              >
                <span>
                  <img
                    src="/chrome/chrome/static/images/fallback/chrome-logo-2023.png"
                    alt="Chrome Logo"
                    className="logo"
                  />
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="d-flex align-items-center d-none d-lg-flex">
            <Nav.Item className="navtabsitem ">
              <Nav.Link
                as={NavLink}
                to={"/"}
                className="Navtabsactivetags text-decoration-none mainlogo d-flex align-items-center p-0 me-2"
              >
                <span>Home</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem ">
              <Nav.Link
                as={NavLink}
                to={"/browser-tools"}
                className="Navtabsactivetags text-decoration-none mainlogo d-flex align-items-center p-0"
              >
                <span>The Browser By Google</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem ">
              <Nav.Link
                as={NavLink}
                to={"/features"}
                className="Navtabsactivetags text-decoration-none mainlogo d-flex align-items-center p-0"
              >
                <Dropdown
                  title="Features"
                  trigger="hover"
                  style={{ background: "white" }}
                >
                  <Dropdown.Item>Item 1</Dropdown.Item>
                  <Dropdown.Menu title="Item 2">
                    <Dropdown.Menu title="Item 2-1">
                      <Dropdown.Item>Item 2-1-1</Dropdown.Item>
                      <Dropdown.Item>Item 2-1-2</Dropdown.Item>
                      <Dropdown.Item>Item 2-1-3</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Item 2-2</Dropdown.Item>
                    <Dropdown.Item>Item 2-3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem ">
              <Nav.Link
                as={NavLink}
                to={"/support"}
                className="Navtabsactivetags text-decoration-none mainlogo d-flex align-items-center p-0"
              >
                <Dropdown
                  title="Support"
                  trigger="hover"
                  style={{ background: "white" }}
                >
                  <Dropdown.Item>Item 1</Dropdown.Item>
                  <Dropdown.Menu title="Item 2">
                    <Dropdown.Menu title="Item 2-1">
                      <Dropdown.Item>Item 2-1-1</Dropdown.Item>
                      <Dropdown.Item>Item 2-1-2</Dropdown.Item>
                      <Dropdown.Item>Item 2-1-3</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Item 2-2</Dropdown.Item>
                    <Dropdown.Item>Item 2-3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </motion.header>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item className="navtabsitem mb-2">
              <Nav.Link
                as={NavLink}
                to={"/"}
                className="Navtabsactivetags text-decoration-none "
                onClick={handleClose}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem mb-2">
              <Nav.Link
                as={NavLink}
                to={"/browser-tools"}
                className="Navtabsactivetags text-decoration-none"
                onClick={handleClose}
              >
                The Browser By Google
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem mb-2">
              <Nav.Link
                as={NavLink}
                to={"/features"}
                className="Navtabsactivetags text-decoration-none"
                onClick={handleClose}
              >
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="navtabsitem mb-2">
              <Nav.Link
                as={NavLink}
                to={"/support"}
                className="Navtabsactivetags text-decoration-none"
                onClick={handleClose}
              >
                Support
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="w-100">
        <Outlet />
      </div>
    </>
  );
};

export default Header;
