import Driverdashboard from "../../pages/Driver-dashboard/Driverdashboard"
import "./offerRide.css"

export const OfferRide = () => {

    return (
      <div>
        <Driverdashboard>
          <h1 className="offer-ride-title" >Want to Offer a Ride ?</h1>
          {/* <button>Enter Dashboard</button> */}
          <div className="offer-ride-form">
            <form onsubmit="event.preventDefault();" autocomplete="off">
                <div className='offer-ride-location'>
                    <label> Pickup Location</label><br />
                    <input  type="text" name="PickupLocation" placeholder="  Where is your waiting point ?"/>
                </div>
                <div className='offer-ride-location'>
                    <label> Dropoff Location</label><br />
                    <input type="text" name="DropoffLocation" placeholder="  Where are you going to ?"/>
                </div>
                <div className='offer-ride-location'>
                    <label> Amount (#) </label><br />
                    <input type="number" name="Amount" placeholder="  Amount in naira"/>
                </div>
                <div className="offer-ride-button">
                    <input type="submit" value="Add a Ride"/>
                </div>
            </form>
          </div>
  
          
        </Driverdashboard>
      </div>
    )
  }