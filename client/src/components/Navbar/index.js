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
      
          <img src={fire} height="25" width="25" alt="" /> <h1>Fast Fingers</h1> <img src={fire} height="25" width="25" alt="" />
   
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
