import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <Navbar bg="secondary" variant="dark"expand="lg">
      <Navbar.Brand className="py-1"href="/">Fast Fingers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto text-left navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link
            href="Https://github.com/tmullen1991/Typing-Practice-Website"
            target="#"
          >
            Github
          </Nav.Link>
          <Nav.Link href="https://tmullen1991.github.io/" target="#">
            Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
