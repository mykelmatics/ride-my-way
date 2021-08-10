
import "./driversignup.css";

function Signup() {
    return (
        <div>
            <div className="body">
                <div className="containerSignup">
                    <div className="title">Personal Details<i className='driverIcon' class="fa fa-id-card-o" aria-hidden="true"></i></div>
                        <div className="content">
                            <form action="#">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">First Name</span>
                                        <input type="text" placeholder="Enter your name" required/>
                                    </div>
                                   
                                     <div className="input-box">
                                        <span className="details">Last Name</span>
                                        <input type="text" placeholder="Enter your Lastname" required/>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="email" placeholder="Enter your email" required/>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Phone Number</span>
                                        <input type="text" placeholder="Enter your number" required/>
                                    </div>
                                    <div className="input-box">
                                        <span class="details">Password</span>
                                        <input type="password" placeholder="Enter your password" required/>
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Confirm Password</span>
                                        <input type="password" placeholder="Confirm your password" required/>
                                    </div>

                                    <div className="button">
                                       <input type="submit" value="Next" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
            </div>
        </div>
     )
}

export default Signup
