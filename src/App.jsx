import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import video from './assets/imgs/video-const.mp4';
import { TfiHome } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";


// images
import hardscaping from './assets/imgs/hardscaping.jpeg';
import roofing_insulation from './assets/imgs/roofing_insulation.jpg';
import fencing from './assets/imgs/fencing.jpg';
import flooring from './assets/imgs/flooring.jpg';
import windows from './assets/imgs/windows.jpg';
import ADU from './assets/imgs/ADU_customHomes.jpg';
import kitchen from './assets/imgs/kitchen1.jpeg';
import bathroom from './assets/imgs/bathroom.jpg';
import paint from './assets/imgs/paint.jpg';

// components
import NavBar from './components/NavBar/NavBar.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import ImageSlider from './components/Portfolio-image-slider/Portfolio-image-slider.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import RemodelingProcess from './components/RemodelingProcess/RemodelingProcess.jsx';
import FreeEstimate from './components/Free-Estimate/Free-Estimate.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    const contactRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    }


    return (
        <Router>
            <>
                <div className="video-container">
                    <video src={video} type="video/mp4" autoPlay loop muted playsInline className="video-background"></video>
                    <NavBar 
                        contactRef={contactRef} 
                        servicesRef={servicesRef} 
                        aboutRef={aboutRef} 
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        closeMenu={closeMenu}
                    />
                    <Routes>
                        <Route path="/" element={<>
                            <main className="main-content">
                                <div className="neighborhood-text">
                                    <span className="house-icon"><TfiHome /></span>
                                    <h2>Neighborhood</h2>
                                    <h3>REMODELING</h3>
                                </div>
                                <div className="information-wrapper">
                                    <div className="what-we-do-wrapper" ref={servicesRef}>
  <h1>Our Main Services</h1>

  <div className="what-we-do-services">
    <WhatWeDo
      img={hardscaping}
      alt="hardscaping and landscaping"
      service="Hardscaping & Landscaping"
      projectKey="hardscaping_landscaping"
    />
    <WhatWeDo
      img={roofing_insulation}
      alt="roofing and insulation"
      service="Roofing & Insulation"
      projectKey="roofs"
    />
    <WhatWeDo
      img={paint}
      alt="paint"
      service="Exterior & Interior Paint"
      projectKey="paint"
    />
    <WhatWeDo
      img={fencing}
      alt="fencing"
      service="Fencing"
      projectKey="fencing"
    />
    <WhatWeDo
      img={flooring}
      alt="flooring"
      service="Flooring"
      projectKey="flooring"
    />
    <WhatWeDo
      img={windows}
      alt="windows"
      service="Windows"
      projectKey="windows"
    />
    <WhatWeDo
      img={kitchen}
      alt="kitchen"
      service="Kitchen Remodeling"
      projectKey="kitchen"
    />
    <WhatWeDo
      img={bathroom}
      alt="bathroom"
      service="Bathroom Remodeling"
      projectKey="bathrooms"
    />
    <WhatWeDo
      img={ADU}
      alt="adu"
      service="ADU - and custom homes"
      projectKey="adu"
    />
  </div>
</div>
                                    <About aboutRef={aboutRef} />
                                    <h4>Our Projects</h4>
                                    <ImageSlider />
                                    <a className="call-us-now" href="tel:3233046498" aria-label="Call 323-304-6498">
                                      <h5>Call us now: <span>323-304-6498</span> For a <span>FREE ESTIMATE</span></h5>
                                    </a>
                                    <RemodelingProcess />
                                    <FreeEstimate />
                                    <Testimonials />
                                    <Footer logo={<TfiHome />} contactRef={contactRef} />
                                </div>
                            </main>
                            <a
                              className="absolute-phone-number"
                              href="tel:3233046498"
                              aria-label="Call 323-304-6498"
                            >
                              <span className="call-us-absolute"><FaPhoneAlt /></span>
                              <h6>Call: 323-304-6498</h6>
                            </a>
                        </>} />
                        <Route path="/portfolio" element={<>
                            <Portfolio />
                            </>} />
                    </Routes>
                </div>
            </>
        </Router>
    );
}

export default App;