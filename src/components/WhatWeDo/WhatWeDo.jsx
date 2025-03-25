import './WhatWeDo.css';
import { Link } from 'react-router-dom'; // Import Link

export default function WhatWeDo({ img, service, alt }) {
    return (
        <div className="what-we-do-wrapper-component">
            <div className="what-we-do-section">
                <img src={img} alt={alt} />
                <h5 className="service">{service}</h5>
                <Link to="/portfolio">
                    <button>More Info</button>
                </Link>
            </div>
            <svg className="services-line hide-on-desktop" width="100%" height="10">
                <line x1="0" y1="5" x2="100%" y2="5" stroke="white" strokeWidth="2" />
            </svg>
        </div>
    );
}