import './WhatWeDo.css';
import { useNavigate } from 'react-router-dom';

export default function WhatWeDo({ img, service, alt, projectKey }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/portfolio?project=${projectKey}`);
  }

  return (
    <article className="service-card" onClick={handleClick}>
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