import "./login.css"
// import { Link } from 'react-router-dom'


export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Ride My Way</h3>
                    <span className="logoDesc">
                     Life is a journey. Enjoy the ride with Ride My Way.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="Email" placeholder="Email"className="loginInput" />
                        <input type="Password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>                                                                                     
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Click Here to Signup
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
