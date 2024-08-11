import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo/logo.svg";
import globe from "../../assets/logo/ic_globe.svg";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import dropDown_icon from "../../assets/logo/drop-down.svg";
import "../../styles/Header.css";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleSelect = (eventKey) => {
    setSelectedLanguage(eventKey);
  };

  return (
    <>
      <Navbar
        style={{
          backgroundColor: "#20aa5c",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          height: "4.5rem"
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Row>
                <Col style={{ padding: "0" }}>
                  <img src={globe} alt="global logo" />
                </Col>
                <Col>
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      as="div"
                      className="custom-dropdown-toggle"
                      id="dropdown-basic"
                    >
                      <span
                        style={{
                          color: "#fff",
                          fontSize: "larger",
                          marginRight: "1rem",
                          fontFamily: "Ubuntu-Medium"
                        }}
                      >
                        {selectedLanguage}
                      </span>
                      <img
                        src={dropDown_icon}
                        alt="dropdown icon"
                        className="dropdown-icon"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="English">English</Dropdown.Item>
                      <Dropdown.Item eventKey="Hindi">Hindi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
