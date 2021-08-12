import "./login.css"
import { useHistory } from "react-router";


export default function Login() {
    const history = useHistory();
    const signuproute = () =>{
        history.push("/")
  
      }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Ride My Way</h3>
                    <div className="logoDesc">
                     Life is a journey. Enjoy the ride with <span className="ridemyWay">Ride My Way.</span>
                    </div>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <div className="loginTitle">login</div>
                        <input type="Email" placeholder="Email"className="loginInput" />
                        <input type="Password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>                                                                                     
                        <span className="loginForgot">Forgot Password?</span>
                        {/* <Link to='/driver-signup'> */}
                        <button onClick={signuproute}className="loginRegisterButton">
                            Create an Account
                        </button>

                        {/* </Link> */}

                    </div>
                </div>
            </div>
            
        </div>
    )
}
