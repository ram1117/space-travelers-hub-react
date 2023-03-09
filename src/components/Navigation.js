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
          <img className="logoImage me-3" src={planet} alt="brand logo" />
          Space Traveler&apos;s Hub
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mx-5">
          <NavItem className="nav-item m-3 px-4"><NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>Rockets</NavLink></NavItem>
          <NavItem className="nav-item m-3 px-4"><NavLink to="missions" className={({ isActive }) => (isActive ? 'underline' : '')}>Missions</NavLink></NavItem>
          <NavItem className="nav-item m-3 px-4"><NavLink to="profile" className={({ isActive }) => (isActive ? 'underline' : '')}>My Profile</NavLink></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
