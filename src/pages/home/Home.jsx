import Topbar from "../../components/topbar/Topbar"
import Tagline from "../../components/tagline/Tagline"
import Service from "../../components/Services/Service"
import About from "../../components/about/About"



function Home() {
    return (
        <>

          <div className="homeContainer" id="home">
              <Topbar/>
              <Tagline/>
              <Service id="service"/>
              <About id="about" />
          </div>      
            

        </>
    )
}

export default Home
