import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Ridersignup from "./pages/Rider-signup/Ridersignup";
import Driversignup from "./pages/Driver-signup/Driversignup";
// import VehicleDetails from './components/vehicleDetails/VehicleDetails'
import {DriverdashboardHome,EditDriverProfile, RideRequest } from './pages/Driver-dashboard/Driverdashboard';
import { OfferRide } from './components/offerRide/offerRide';
import Ridehistory from './components/ridehistory/ridehistory';
import {RiderdashboardHome, EditRiderProfile} from './pages/Riderdashboard/Riderdashboard';
import { AvailableRideOffer } from './pages/Riderdashboard/Riderdashboard';



function App() {
  return (
    <div>
    
      <Router>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/rider-signup' component={Ridersignup}/> 
            <Route path='/driver-signup' component={Driversignup}/>  
            <Route path='/driver-dashboard' component={DriverdashboardHome} />     
            <Route path='/edit-driverprofile' component={EditDriverProfile} /> 
            <Route path='/offer-a-ride' component={OfferRide } />
            <Route path='/ride-history' component={Ridehistory} />
            <Route path='/rider-dashboard' component={RiderdashboardHome} />
            <Route path='/edit-riderprofile' component={EditRiderProfile} />
            <Route path='/available-ride' component={AvailableRideOffer} />
            <Route path='/ride-requests' component={RideRequest} />




           </Switch>    
       </Router> 
   
      </div>
  );
}

export default App;

