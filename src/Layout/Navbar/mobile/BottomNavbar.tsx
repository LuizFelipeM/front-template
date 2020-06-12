import React from 'react';
import { Link, useLocation as routerLocation } from 'react-router-dom';
import './BottomNavbar.css';
import NavbarButton from './NavbarButton/NavbarButton';
import routes from '../../../Route/routesConfig';

export default function LayoutNavbarMobile() { 

  function isEnabled(pathName: string): boolean {
    let location = routerLocation();
    var isEnabled = pathName === location.pathname;
    return isEnabled;
  }

  return (
    <>
      <div id="nav-m">
        <Link to={routes.Dashboard.url}>
          <NavbarButton
            type={'grade'}
            enabled={isEnabled(routes.Dashboard.url)}
          />
        </Link>
        <Link to={routes.Profile.url}>
          <NavbarButton
            type={'user'}
            enabled={isEnabled(routes.Profile.url)}
          />
        </Link>
        <span className="stretch"></span>
      </div>
    </>
  ) 
}
