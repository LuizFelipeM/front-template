import React from "react";
import LayoutNavbar from "./Navbar/desktop/TopNavbar/TopNavbar";
import './Layout.css';
import { Router } from "react-router-dom";
import customHistory from "../history";
import BottomNavbar from "./Navbar/mobile/BottomNavbar";
import Routes from "../Route/Routes";

const Layout = () => (
  <Router history={customHistory}>
      <div className="content-wrapper">     
        <LayoutNavbar/>
        {customHistory.location.pathname !== '/' && <BottomNavbar/>}
        <Routes/>
        <div className="page-container-fix"></div>
    </div>
  </Router>
  
)
export default Layout;