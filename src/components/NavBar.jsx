import Container from 'react-bootstrap/Container';
import CartWidget from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'
//import '../css/NavBar.css';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to='/'>
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
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to='/category/rostro'>Rostro</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/ojos'>Ojos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/category/labios'>Labios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/ofertas'>
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#cart" className="justify-content-end">
        <CartWidget/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;