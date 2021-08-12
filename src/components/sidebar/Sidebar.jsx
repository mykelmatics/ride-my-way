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
        <span  onClick={homeroute}>Dashboard</span>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-wrench"></i>
        <span  onClick={editroute}>Edit Profile</span>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-handshake-o"></i>
        <span  onClick={offerrideroute}>Offer a Ride</span>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-question"></i>
        <span onClick={riderequestroute}>Ride Requests</span>
      </div>
    </Slide>

    <Slide left>
      <div className="sidebar__link">
        <i className="fa fa-calendar-check-o"></i>
        <span  onClick={ridehistoryroute}>My Trips</span>
      </div>
    </Slide>
     
    <Slide left>
      <div className="sidebar__logout">
        <i className="fa fa-sign-out"></i>
        <span onClick={logoutroute}>Log out</span>
      </div>
    </Slide>
    </div>

        
 </div>
    
  );
};

export default Sidebar;
