import {
  Nav, Navbar, NavItem, Container,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import planet from '../icons/planet.png';
import '../styles/Navigation.css';

const Navigation = () => (
  <Navbar expand="md">
    <Container>
      <Navbar.Brand className="d-flex">
        <div>
          <img className="logoImage" src={planet} alt="brand logo" />
          Space Traveler&apos;s Hub
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavItem className="nav-item"><NavLink to="profile" className={({ isActive }) => (isActive ? 'underline' : '')}>My Profile</NavLink></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
