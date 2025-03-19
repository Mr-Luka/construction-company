import video from './assets/imgs/video-const.mp4';
import { TfiHome } from "react-icons/tfi";

// images:
import landscape from './assets/imgs/landscaping.jpeg';
import hardscaping from './assets/imgs/hardscaping.jpeg';
import kitchen from './assets/imgs/kitchen1.jpeg';
import bathroom from './assets/imgs/bathroom.jpg';
import paint from './assets/imgs/paint.jpg';


// components:
import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx';
import ImageSlider from './components/Portfolio-image-slider/Portfolio-image-slider.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import RemodelingProcess from './components/RemodelingProcess/RemodelingProcess.jsx';
import FreeEstimate from './components/Free-Estimate/Free-Estimate.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {
  return (
    <>
     <div className="video-container">
        <video src={video} type="video/mp4" autoPlay loop muted playsInline className="video-background">
        </video>
        <NavBar />
        <main className='main-content'>
          <div className='neighborhood-text'>
              <span className='house-icon'><TfiHome /></span>
              <h2>Neighborhood</h2>
              <h3>REMODELING</h3>
          </div>
          <div className='information-wrapper'>
            <About />
            <div className='what-we-do-wrapper'>
              <h1>Our Main Services</h1>
              <div className='what-we-do-services'>
                <WhatWeDo img={landscape} alt='landscaping' service='Landscaping'/>
                <WhatWeDo img={hardscaping} alt='hardscaping' service='Hardscaping'/>
                <WhatWeDo img={kitchen} alt='kitchen' service='Kitchen'/>
                <WhatWeDo img={bathroom} alt='Bathroom' service='Bathroom'/>
                <WhatWeDo img={paint} alt='paint' service='Interior / Exterior Paint'/>
              </div>
            </div>
            <h4>Our Projects</h4>
            <ImageSlider />
            <div className='call-us-now'>
              <h5>Call us now: <span>800-555-5555</span> For a <span>FREE ESTIMATE</span></h5>
            </div>
            <RemodelingProcess />
            <FreeEstimate />
            <Footer logo={<TfiHome/>}/>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
