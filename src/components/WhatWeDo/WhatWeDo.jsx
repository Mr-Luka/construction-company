import './WhatWeDo.css';
import { useNavigate } from 'react-router-dom';

export default function WhatWeDo({ img, service, alt, serviceSlug, index = 0 }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/services/${serviceSlug}`);
  }

  return (
    <article
      className="service-card"
      onClick={handleClick}
      style={{ animationDelay: `${index * 110}ms` }}
    >
      <div className="service-card-image-wrap">
        <img src={img} alt={alt} />
        <div className="service-card-overlay" />
        <div className="service-card-content">
          <h5 className="service-card-title">{service}</h5>
        </div>
      </div>
    </article>
  );
}
