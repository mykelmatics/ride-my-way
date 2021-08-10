import "./about.css"


function About(props) {
    return (
        <div id={props.id}>
            <div className="aboutUsContainer"  >
                <div className="aboutUsText">
                    <div className="aboutUsheader">
                        About Us
                    </div>
                    <div className="aboutUsContent">
                    Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet
                    Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,
                    Lorem ipsum dolor sit amet
                    </div>
                </div>
                <div className="contactUsText">
                    <div className="contactUsheader">
                        Contact Us
                    </div>
                    <div className="contactUsContent">
                    <span className="officeAddress">Office Address</span><br />
                    Plot 118, Block 25 Salem St, Lekki Penninsula II, Lekki.
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default About
