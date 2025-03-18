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

export default function Footer ({logo}){

    return (
        <div className="footer">
            <div className='neighborhood-text-footer'>
              <span className='house-icon-footer'>{logo}</span>
              <h2>Neighborhood</h2>
              <h3>REMODELING</h3>
          </div>
          <div className='contact-footer'>
            <h4>Contact</h4>
            <div className='contact-hours'>
                <span className='process-icon'><FaClock /> Mon - Fri: 8am - 6pm</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'><FaPhoneAlt /> 800 - 555 -555</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'><IoMdMail /> neighborhood.remodeling@gmail.com</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'><GrUserWorker /> We are hiring!</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'><ImLocation /> 85884 Some Address Blvd, #205, Newport Beach, CA 93058</span>
            </div>
          </div>
            <div className='socials-f'>
                <img src={yelp} alt='yelp'/>
                <img src={fb} alt='facebook'/>
                <img src={instagram} alt='instagram'/>
                <img src={x} alt='x-twitter'/>
                <img src={tiktok} alt='tik-tok'/>
            </div>
        </div>
    )
}