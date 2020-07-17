import React from "react";
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Link , withRouter} from "react-router-dom";
import * as routes from "../Constants/routes";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Product Log</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href={routes.HOME_ROUTE}>Home</Nav.Link>
      <Nav.Link href={routes.RPRODUCT_ROUTE}>Product</Nav.Link>
    </Nav>
    <Form inline>
      <Link to={routes.ROOT_ROUTE}><Button variant="outline-success">Logout</Button></Link>
    </Form>
    </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
