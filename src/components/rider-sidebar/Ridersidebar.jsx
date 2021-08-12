import "./ridersidebar.css";
import { useHistory } from "react-router";


const Ridersidebar = ({ sidebarOpen, closeSidebar }) => {
  const history = useHistory();

  const riderHomeroute = ()=>{
    history.push("/rider-dashboard")
    // setsidebarOpen(false);
  }
  const riderEditroute = ()=>{
    history.push("/edit-riderprofile")
    // setsidebarOpen(false);
  }
  const availableRideroute = ()=>{
    history.push("/available-ride")
    // setsidebarOpen(false);
  }
  // const searchForRideroute = ()=>{
  //   history.push("/offer-a-ride")
  //   // setsidebarOpen(false);
  // }
  const signOutRideroute = ()=>{
    history.push("/")
    // setsidebarOpen(false);
  }

  return (
    <div className={sidebarOpen ? "Ridersidebar_responsive" : ""} id="Ridersidebar">
      <div className="Ridersidebar__title">
      <div className="Ridersidebar__img">
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

      <div className="Ridersidebar__menu">
        <div className="Ridersidebar__link ">
          <i className="fa fa-home"></i>
          <span onClick={riderHomeroute}>Home</span>
        </div>
  
        <div className="Ridersidebar__link">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
          <span onClick={riderEditroute}>Edit Profile</span>
        </div>
        <div className="Ridersidebar__link">
          <i className="fa fa-building-o"></i>
          <span onClick={availableRideroute}>Available Rides</span>
        </div>

        {/* <div className="Ridersidebar__link">
          <i className="fa fa-question"></i>
          <a onClick={searchForRideroute }>Find a Ride</a>
        </div> */}

        <div className="Ridersidebar__logout">
          <i className="fa fa-power-off"></i>
          <span onClick={signOutRideroute}>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Ridersidebar;
