import "./Navbar.css";
// import  "../avatar.svg";
// import { useState } from "react";

const Navbar = ({ sidebarOpen, openSidebar }) => {
//   const [sidebarOpen, setsidebarOpen] = useState(false);
//   openSidebar = () => {
//    setsidebarOpen(true);
//  };
//   closeSidebar = () => {
//    setsidebarOpen(false);
//  };
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        {/* <a href="#">Subscribers</a>
        <a href="#">Video Management</a>
        <a className="active_link" href="#">
          Admin
        </a> */}
      </div>
      <div className="navbar__right">
        {/* <a href="#">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a> */}
        <a href="#!">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <img width="30" src="/assets/mykel.jpg" alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
