import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart3 } from 'react-icons/bs';
import "./Header.css"
import logo from "../logo/logo.jpg"
import { Link } from 'react-router-dom';
function BasicExample() {
  return (
    <Navbar className='nav' bg="#fff" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='header_left'><img src={logo}/></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>


            <Link to={"/giai-phap"}>
            <NavDropdown title="Giai phap" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Link>
            <NavDropdown title="San pham" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/lien-he">Lien he</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <BsCart3/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;