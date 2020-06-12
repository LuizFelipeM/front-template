
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../../logo.png';
import './TopNavbar.css';
import routes from '../../../../Route/routesConfig';

const LayoutNavbar = () => (
  <>
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src={Logo}
          height="80"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav.Link className={`nav-button white`} as={Link} to={routes.Dashboard.url}>{routes.Dashboard.name}</Nav.Link>
        <Nav.Link className={`nav-button white`} as={Link} to={routes.Profile.url}>{routes.Profile.name}</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default LayoutNavbar;