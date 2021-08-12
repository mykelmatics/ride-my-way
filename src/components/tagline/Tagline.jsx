import "./tagline.css"
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom'


function Tagline() {
    return (
        <div  className="apptagLine">
          <Slide left>
            <div className="imgSlogan">Build for human convenience,<br />Excellence and Beyond.</div> 
          </Slide>
          <div className="callToActionButton">
          <Link  to='/rider-signup'>
            <span className="cta ">Sign up to ride</span>
          </Link>
          <Link to='/driver-signup'>
            <span className="cta ">Apply to Drive</span>
          </Link>




          </div>


        </div>
    

    )
}

export default Tagline
