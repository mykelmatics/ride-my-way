import { useState } from "react";
import "./driverdashboard.css";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import EditProfile from "../../components/edit-profile/Editprofile";
import Riderequests from "../../components/ride-requests/Riderequests";
// import "./Sidebar.css"
// import "./Main.css"

//a template for my Driverdashboard
const Driverdashboard = (props) => {
  // const history = useHistory()
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };


  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <main>{props.children}</main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
};

export default Driverdashboard;



export const DriverdashboardHome = () => {

    return (
        <Driverdashboard>
  
           <Main/> 
        
        </Driverdashboard>
    )
}



export const EditDriverProfile = () => {
  return (
    <div>
      <Driverdashboard>
        <EditProfile/>
      </Driverdashboard>
    </div>
  )
}

export const RideRequest = () => {
  return (
    <div>
      <Driverdashboard>
        <Riderequests/>
      </Driverdashboard>
    </div>
  )
}








