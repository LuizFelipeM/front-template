import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../../../logo.png';
import './TopNavbar.css';
import routes from '../../../../Route/routesConfig';

const LayoutNavbar = () => {
  const [selected, setSelected] = useState('/home')

  const isSelected = (path: string) => selected === path;

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand as={Link} to="/home">
          <img
            alt="logo"
            src={Logo}
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end hide-mobile">
          <Nav.Link
            as={Link}
            to={routes.Dashboard.url}
            active={isSelected(routes.Dashboard.url)}
            onClick={() => setSelected(routes.Dashboard.url)}
          >
            {routes.Dashboard.name}
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={routes.Profile.url}
            active={isSelected(routes.Profile.url)}
            onClick={() => setSelected(routes.Profile.url)}
          >
            {routes.Profile.name}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}


export default LayoutNavbar;