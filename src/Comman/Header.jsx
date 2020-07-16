import React from "react";
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link , withRouter} from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Product Log</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/product">Product</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-success">Logout</Button>
    </Form>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
