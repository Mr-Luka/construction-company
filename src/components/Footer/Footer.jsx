import './Footer.css';

// icons
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { ImLocation } from "react-icons/im";

import yelp from '../../assets/imgs/icons/yelp.png';
import fb from '../../assets/imgs/icons/facebook.png';
import instagram from '../../assets/imgs/icons/instagram.png';
import x from '../../assets/imgs/icons/twitter.png';
import tiktok from '../../assets/imgs/icons/tik-tok.png';

export default function Footer({ logo, contactRef }) {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className='neighborhood-text-footer'>
          <div className="logo-container">
              <img src={logo} alt="Neighborhood Remodeling" className="logo-img" />
          </div>
          <h2>Neighborhood</h2>
          <h3>REMODELING</h3>
        </div>

        <div className='contact-footer' ref={contactRef}>
          <h5>Contact Us</h5>

          <div className='contact-hours'>
            <span className='process-icon-footer'><FaClock /></span>
            <p>Mon - Fri: 8am - 6pm</p>
          </div>

          <a className='contact-hours contact-link' href="tel:3233046498">
            <span className='process-icon-footer'><FaPhoneAlt /></span>
            <p>323-304-6498</p>
          </a>

          <a
            className='contact-hours contact-link'
            href="mailto:neighborhoodremodelinginc@gmail.com"
          >
            <span className='process-icon-footer'><IoMdMail /></span>
            <p>neighborhoodremodelinginc@gmail.com</p>
          </a>

          <div className='contact-hours'>
            <span className='process-icon-footer'><GrUserWorker /></span>
            <p>We are hiring!</p>
          </div>

          <div className='contact-hours'>
            <span className='process-icon-footer'><ImLocation /></span>
            <p>416 Enclave circle, office 305, Costa Mesa, CA 92626</p>
          </div>
        </div>

        <div className='socials-f'>
          <img src={yelp} alt='yelp' />
          <img src={fb} alt='facebook' />

          <a
            href="https://www.instagram.com/neighborhood_remodeling/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Neighborhood Remodeling Instagram"
          >
            <img src={instagram} alt='instagram' />
          </a>

          <img src={x} alt='x-twitter' />
          <img src={tiktok} alt='tik-tok' />
        </div>
      </div>
    </div>
  );
}