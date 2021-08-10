import "./Sidebar.css";
// import { useState } from "react";
// import logo from "../../assets/logo.png";
import Slide from 'react-reveal/Slide';
import { useHistory } from "react-router";



const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const history = useHistory();
    // const [sidebarOpen, setsidebarOpen] = useState(false);
    //  openSidebar = () => {
    //   setsidebarOpen(true);
    // };
    //  closeSidebar = () => {
    //   setsidebarOpen(false);
    // };
  
    const homeroute = ()=>{
      history.push("/driver-dashboard")
      // setsidebarOpen(false);
    }
    const editroute = ()=>{
      history.push("/edit-driverprofile")
      // setsidebarOpen(false);
    }
    const offerrideroute = ()=>{
      history.push("/offer-a-ride")
      // setsidebarOpen(false);
    }
    const logoutroute = () =>{
      history.push("/")

    }
    const ridehistoryroute = () =>{
      history.push("/ride-history")

    }
    const riderequestroute = () =>{
      history.push("/ride-requests")

    }
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
    <div className="sidebar__title">
      <div className="sidebar__img">
        <i className="fa fa-car" aria-hidden="true"></i>
        <h1>Ride My Way</h1>
      </div>
      <i
        onClick={() => closeSidebar()}
        className="fa fa-times"
        id="sidebarIcon"
        aria-hidden="true"
      ></i>
    </div>
    
    <div className="sidebar__menu">
    <Slide left>
      <div className="sidebar__link active_menu_link">
        <i className="fa fa-home"></i>
        <a onClick={homeroute}>Dashboard</a>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-wrench"></i>
        <a onClick={editroute}>Edit Profile</a>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-handshake-o"></i>
        <a onClick={offerrideroute}>Offer a Ride</a>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-question"></i>
        <a onClick={riderequestroute}>Ride Requests</a>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-calendar-check-o"></i>
        <a onClick={ridehistoryroute}>My Trips</a>
      </div>
    </Slide>
     
    <Slide left>
      <div className="sidebar__logout">
        <i className="fa fa-sign-out"></i>
        <a onClick={logoutroute}>Log out</a>
      </div>
    </Slide>
    </div>

        
 </div>
    
  );
};

export default Sidebar;
