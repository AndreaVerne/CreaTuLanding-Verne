import Container from "react-bootstrap/Container";
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getCategories } from "../mock/AsyncMock";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getCategories());
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/src/assets/kiri.png"
            height="30"
            className="d-inline-block align-top img"
            alt="Kiri Makeup"
            title="Kiri Makeup"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category}
                  as={NavLink}
                  to={`/category/${category}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/category/ofertas">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
