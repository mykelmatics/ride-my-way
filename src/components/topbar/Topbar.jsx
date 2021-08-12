import "./topbar.css"
// import { Link } from '@reach/router'
import { Link } from 'react-router-dom'

export default function Topbar() {

    const topbarStyle = {
        color: 'black',
        textDecoration: 'none'

    };
    
    return (
        <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Ride My Way</span>
            <span className="logoIcon"><i class="fa fa-car" aria-hidden="true"></i></span>
        </div> 
        <div className="topbarRight">
              <div className="topbarLinks">
                    <div className="topbarTextlink">
                        <a href="#home">
                        <span className="topbarLink">Home</span>
                        </a>
                        <a href="#about">
                        <span className="topbarLink">About us</span>
                        </a>
                        <a href='#service'>
                        <span className="topbarLink">Services</span>
                        </a>
                        <a href='#about'>
                        <span className="topbarLink">Contact Us</span>
                        </a>
                        

                    </div>
                    <div className="topbarButton">
                        <Link to='/login'>
                             <button className="loginBtn ">LOG IN</button> 
                        </Link>
                    </div>
                    <div className="topbarRegisterbtn">
                       <button className="dropbtn">SIGN UP <span className="topbarCaretIcon"><i class="fa fa-caret-down"></i></span> </button>
                        <ul className="dropdown-content" >
                            <Link style={topbarStyle} to='/rider-signup'>
                                <li className="registerPassenger ">Sign up to ride</li>
                            </Link>
                            <Link style={topbarStyle} to='/driver-signup'>
                                 <li className="registerDriver">Apply as a Driver</li>
                            </Link>
                        </ul>
                    </div>
                    {/* <div className="topbarNavicon" >
                            <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>            */}
               </div>
         </div>
    </div>
    )
}

