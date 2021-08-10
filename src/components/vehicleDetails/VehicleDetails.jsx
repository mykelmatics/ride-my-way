import './vehicleDetails.css'
import carName from '../carManufacturerData'

export default function VehicleDetails() {
    const vehicleYear = ['2004' ,'2005', '2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021']
    const vehicleColor = ["White","Green","Silver","Black","Red","Maroon","Blue","Brown","Orange","Green"]
    
    let yearList = vehicleYear.map((eachYear, index) => {
		return (
			<option  key={index} value={index}>{eachYear}</option>
		)
	})
    let carList = carName.map((manufacturer, index) => {
		return (
			<option  key={index} value={index}>{manufacturer.name}</option>
		)
	});
    return (
        <div>
            <div className="vehicleInfo">
                <form action="#">
                    <span  className="vehicleInfoTitle">Vehicle Details</span>
                    <span className="vehicleDetailsLogo"><i class="fa fa-car" aria-hidden="true"></i></span>
                    <div className="vehicleManufacturer">
                        <span className="vehicleManufacturerLabel">Vehicle Manufacturer</span>
                        <select name="VehicleMaufacturer" id="">
                            {carList}
                        </select>
                    </div>
                    <div className="vehicleManufacturer">
                        <span className="vehicleManufacturerLabel">Vehicle Year</span>
                        <select name="VehicleMaufacturer" id="">
                            {yearList}
                        </select>
                    </div>
                    <div className="vehicleManufacturer">
                        <span className="vehicleManufacturerLabel">Vehicle Year</span>
                        <select name="VehicleMaufacturer" id="">
                            {yearList}
                        </select>
                    </div>
                    <div className="vehicleManufacturer">
                        <span className="vehicleManufacturerLabel">Vehicle Year</span>
                        <select name="VehicleMaufacturer" id="">
                            {yearList}
                        </select>
                    </div>

                </form>
                
            </div>
        </div>
    )
}
// import React from 'react'

// const VehicleDetails = () => {
//     return (
//         <div>
//             <h1>Hello </h1>
//         </div>
//     )
// }

// export default VehicleDetails

