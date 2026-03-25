import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import video from './assets/imgs/video-const.mp4';
import { FaPhoneAlt } from 'react-icons/fa';

//logo
import logo from './assets/imgs/logo-house.png';

import hardscaping from './assets/imgs/hardscaping.jpeg';
import roofing_insulation from './assets/imgs/roofing_insulation.jpg';
import fencing from './assets/imgs/fencing.jpg';
import flooring from './assets/imgs/flooring.jpg';
import windows from './assets/imgs/windows.jpg';
import ADU from './assets/imgs/ADU_customHomes.jpg';
import kitchen from './assets/imgs/kitchen1.jpeg';
import bathroom from './assets/imgs/bathroom.jpg';
import paint from './assets/imgs/paint.jpg';

import NavBar from './components/NavBar/NavBar.jsx';
import About from './components/About/About.jsx';
import ImageSlider from './components/Portfolio-image-slider/Portfolio-image-slider.jsx';
import WhatWeDo from './components/WhatWeDo/WhatWeDo.jsx';
import RemodelingProcess from './components/RemodelingProcess/RemodelingProcess.jsx';
import FreeEstimate from './components/Free-Estimate/Free-Estimate.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import ServiceDetailPage from './components/Services/ServiceDetailPage.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setServicesVisible(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;

    if (connection && (connection.saveData || /2g|3g/.test(connection.effectiveType || ''))) {
      setShouldLoadVideo(false);
      return;
    }

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (reducedMotion?.matches) {
      setShouldLoadVideo(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (!shouldLoadVideo) {
      setVideoReady(false);
    }
  }, [shouldLoadVideo]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="video-container">
        <img
          src={hardscaping}
          alt="Neighborhood Remodeling hero background"
          className={`hero-fallback-image ${videoReady ? 'is-hidden' : ''}`}
        />
        {shouldLoadVideo && (
          <video
            src={video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={hardscaping}
            className={`video-background ${videoReady ? 'is-ready' : ''}`}
            onCanPlay={() => setVideoReady(true)}
          ></video>
        )}
        <NavBar
          contactRef={contactRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          closeMenu={closeMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <main className="main-content">
                  <div className="neighborhood-text">
                    <h2>Neighborhood</h2>
                    <h3>REMODELING</h3>
                  </div>
                  <div className="information-wrapper">
                    <div className={`what-we-do-wrapper ${servicesVisible ? 'is-visible' : ''}`} ref={servicesRef}>
                      <h1>Our Main Services</h1>

                      <div className="what-we-do-services">
                        <WhatWeDo
                          index={0}
                          img={hardscaping}
                          alt="hardscaping and landscaping"
                          service="Hardscaping & Landscaping"
                          serviceSlug="hardscaping-landscaping"
                        />
                        <WhatWeDo
                          index={1}
                          img={roofing_insulation}
                          alt="roofing and insulation"
                          service="Roofing & Insulation"
                          serviceSlug="roofing-insulation"
                        />
                        <WhatWeDo
                          index={2}
                          img={paint}
                          alt="paint"
                          service="Exterior & Interior Paint"
                          serviceSlug="exterior-interior-paint"
                        />
                        <WhatWeDo
                          index={3}
                          img={fencing}
                          alt="fencing"
                          service="Fencing"
                          serviceSlug="fencing"
                        />
                        <WhatWeDo
                          index={4}
                          img={flooring}
                          alt="flooring"
                          service="Flooring"
                          serviceSlug="flooring"
                        />
                        <WhatWeDo
                          index={5}
                          img={windows}
                          alt="windows"
                          service="Windows"
                          serviceSlug="windows"
                        />
                        <WhatWeDo
                          index={6}
                          img={kitchen}
                          alt="kitchen"
                          service="Kitchen Remodeling"
                          serviceSlug="kitchen-remodeling"
                        />
                        <WhatWeDo
                          index={7}
                          img={bathroom}
                          alt="bathroom"
                          service="Bathroom Remodeling"
                          serviceSlug="bathroom-remodeling"
                        />
                        <WhatWeDo
                          index={8}
                          img={ADU}
                          alt="adu"
                          service="ADU & Custom Homes"
                          serviceSlug="adu-custom-homes"
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
                    <Footer logo={logo} contactRef={contactRef} />
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
              </>
            }
          />
          <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
