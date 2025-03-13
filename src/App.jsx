import video from './assets/imgs/video-const.mp4';
import { TfiHome } from "react-icons/tfi";

// images:
import landscape from './assets/imgs/landscaping.jpeg';
import hardscaping from './assets/imgs/hardscaping.jpeg';
import kitchen from './assets/imgs/kitchen1.jpeg';
import bathroom from './assets/imgs/bathroom.jpg';
import paint from './assets/imgs/paint.jpg';


import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx';
import ImageSlider from './components/Portfolio-image-slider/Portfolio-image-slider.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';

function App() {
  return (
    <>
     <div className="video-container">
        <video src={video} type="video/mp4" autoPlay loop muted playsInline className="video-background">
        </video>
        <NavBar />
        <main className='main-content'>
          <div className='ecorise-text'>
              <span className='house-icon'>{<TfiHome />}</span>
              <h2>Neighborhood</h2>
              <h3>REMODELING</h3>
          </div>
          <div className='information-wrapper'>
            <h4>Our Projects</h4>
            <ImageSlider />
            <div className='what-we-do-wrapper'>
              <h1>Our Main Services</h1>
              <WhatWeDo img={landscape} alt='landscaping' service='Landscaping'/>
              <WhatWeDo img={hardscaping} alt='hardscaping' service='Hardscaping'/>
              <WhatWeDo img={kitchen} alt='kitchen' service='Kitchen'/>
              <WhatWeDo img={bathroom} alt='Bathroom' service='Bathroom'/>
              <WhatWeDo img={paint} alt='paint' service='Interior / Exterior Paint'/>

            </div>
            <About />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
