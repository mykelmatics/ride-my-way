import './availablerequest.css'
import React from 'react'

const Availablerequest = () => {
    return (
    <>
        <div className="availableRequestTitle">showing All Available Rides</div>
        <div className="availableRequestFlex">
            <div className="availableReqWrapper">
             <div className="availableReqInfo">
                <div>
                    <div className="availableReqDriverDetails">
                        <img className="availableReqDriverImg" src="/assets/mykel.jpg" alt="" />
                        <span className="availableReqDriverName">Tunde Omotayo</span>
                    </div>
                    <div>
                        <span className="availablePickoffLocation"><span className="availableAddress">From:</span>637 Kyle Street, Fullerton,  </span><br />
                        <span className="availablePickoffLocation"><span className="availableAddress">To:</span>  637 Kyle Street, Fullerton, NE 68638</span>
                    </div>
                    <div>
                        <span className="timePosted"><i style={{color:'red',marginRight:'10px'}}class="fa fa-calendar" aria-hidden="true"></i>23rd Feb 12:10pm</span><br />
                        <span className="availableDriverNumber"><i style={{color:'green', marginRight:'10px'}} className="fa fa-phone" aria-hidden="true"></i>08029385034</span>
                    </div>
                 </div>
                 <div className="availableRideRight">
                     <span className="availableRidePrice">#500</span><br />
                    <input className="availableRideButton"type="submit" value="join Ride" />
                 </div>


                </div>
            </div>
            <div className="availableReqWrapper">
             <div className="availableReqInfo">
                <div>
                    <div className="availableReqDriverDetails">
                        <img className="availableReqDriverImg" src="/assets/mykel.jpg" alt="" />
                        <span className="availableReqDriverName">Tunde Omotayo</span>
                    </div>
                    <div>
                        <span className="availablePickoffLocation"><span className="availableAddress">From:</span>637 Kyle Street, Fullerton,  </span><br />
                        <span className="availablePickoffLocation"><span className="availableAddress">To:</span>  637 Kyle Street, Fullerton, NE 68638</span>
                    </div>
                    <div>
                        <span className="timePosted"><i style={{color:'red',marginRight:'10px'}}class="fa fa-calendar" aria-hidden="true"></i>23rd Feb 12:10pm</span><br />
                        <span className="availableDriverNumber"><i style={{color:'green', marginRight:'10px'}} className="fa fa-phone" aria-hidden="true"></i>08029385034</span>
                    </div>
                 </div>
                 <div className="availableRideRight">
                     <span className="availableRidePrice">#2,000</span><br />
                    <input className="availableRideButton"type="submit" value="join Ride" />

                 </div>


                </div>
            </div>
            <div className="availableReqWrapper">
             <div className="availableReqInfo">
                <div>
                    <div className="availableReqDriverDetails">
                        <img className="availableReqDriverImg" src="/assets/mykel.jpg" alt="" />
                        <span className="availableReqDriverName">Tunde Omotayo</span>
                    </div>
                    <div>
                        <span className="availablePickoffLocation"><span className="availableAddress">From:</span>637 Kyle Street, Fullerton,  </span><br />
                        <span className="availablePickoffLocation"><span className="availableAddress">To:</span>  637 Kyle Street, Fullerton, NE 68638</span>
                    </div>
                    <div>
                        <span className="timePosted"><i style={{color:'red',marginRight:'10px'}}class="fa fa-calendar" aria-hidden="true"></i>23rd Feb 12:10pm</span><br />
                        <span className="availableDriverNumber"><i style={{color:'green', marginRight:'10px'}} className="fa fa-phone" aria-hidden="true"></i>08029385034</span>
                    </div>
                 </div>
                 <div className="availableRideRight">
                     <span className="availableRidePrice">#1,500</span><br />
                    <input className="availableRideButton"type="submit" value="join Ride" />

                 </div>


                </div>
            </div>
        </div>
    </>
    )
}

export default Availablerequest;
