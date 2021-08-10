import { useState } from "react";
import Ridersidebar from "../../components/rider-sidebar/Ridersidebar";
import RiderMain from "../../components/rider-main/Ridermain";
import "./riderdashboard.css";
import Navbar from "../../components/navbar/Navbar";
import EditProfile from "../../components/edit-profile/Editprofile";
import Availablerequest from "../../components/available-requests/Availablerequest";




//a template for my Riderdashboard

const Riderdashboard = (props) => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="RiderdashboardContainer">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <main>{props.children}</main>
      <Ridersidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
    </div>
  );
};

export default Riderdashboard;
export const RiderdashboardHome = () => {

    return (
        <Riderdashboard>
  
           <RiderMain/> 
        
        </Riderdashboard>
    )
}



export const EditRiderProfile = () => {
  return (
    <div>
      <Riderdashboard>
          <EditProfile/>
      </Riderdashboard>
    </div>
  )
}
export const AvailableRideOffer = () => {
    return (
      <div>
        <Riderdashboard>
            <Availablerequest/>
        </Riderdashboard>
      </div>
    )
  }
