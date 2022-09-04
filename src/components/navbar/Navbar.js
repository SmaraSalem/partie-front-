import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>Ecomerce-Shopify</Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="products">
              {" "}
              <button>Products</button>
            </Link>
            <Link to="users">
              {" "}
              <button>Users</button>
            </Link>
          </Nav>
          <Nav>
            <button>se déconnecter </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
