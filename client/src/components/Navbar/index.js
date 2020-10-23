import React from "react";
import Nav from "react-bootstrap/Nav";
import fire from "./fire.png";

function Navbar() {
  return (
    <Nav
      activeKey="/home"
      className="bg-warning justify-content-center"
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <img src={fire} height="25" width="25" alt="" /> Fast Fingers <img src={fire} height="25" width="25" alt="" />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
