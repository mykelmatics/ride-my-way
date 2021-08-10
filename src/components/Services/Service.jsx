import "./service.css"

function Service(props) {
   
    return (
      //   <div>
           <div id={props.id} className="serviceContainers">
              <div className="firstServiceContainer">
                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-car" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">Fast and Safe</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>
                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-user" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">Experienced Drivers</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>
                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">Online Booking</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>
              </div>
              
              <div className="secondServiceContainer">
                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-search" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">GPS Searching</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>
                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-taxi" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">Safe Journey</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>

                  <div className="serviceContainer">
                     <span className="serviceContainerIcon"><i class="fa fa-cogs" aria-hidden="true"></i></span>
                     <span className="serviceContainerTitle">24/7 Cab Services</span>
                     <span className="serviceContainerText">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor euismod ex eu laoreet. 
                        Proin ut sem ut tortor congue pulvinar. Fusce pellentesque, tortor at malesuada tristique.
                     </span>
                  </div>    
               </div>
                     
              </div>


            
      //   </div>
    )
}

export default Service
