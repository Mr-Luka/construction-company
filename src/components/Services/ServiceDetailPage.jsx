import { Link, Navigate, useParams } from 'react-router-dom';
import { TfiHome } from 'react-icons/tfi';
import Footer from '../Footer/Footer.jsx';
import { getServiceBySlug, services } from './serviceData.js';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <main className="service-detail-page">
        <section className="service-hero">
          <div className="service-hero-overlay" />
          <img src={service.coverImage} alt={service.title} className="service-hero-image" />
          <div className="service-hero-content">
            <p className="service-eyebrow">Our Main Services</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
            <div className="service-hero-actions">
              <a href="tel:3233046498" className="service-primary-cta">Call for Free Estimate</a>
              <Link to="/" className="service-secondary-cta">Back to Home</Link>
            </div>
          </div>
        </section>

        <section className="service-copy-section">
          <div className="service-copy-grid">
            <div>
              <h2>About {service.shortTitle}</h2>
              <p>{service.description}</p>
            </div>

            <div className="service-bullets-card">
              <h3>What we offer</h3>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-gallery-section">
          <div className="service-section-heading">
            <p>Recent Work</p>
            <h2>{service.title} Projects</h2>
          </div>

          <div className="service-gallery-grid">
            {service.gallery.map((image, index) => (
              <div className="service-gallery-card" key={`${image.title}-${index}`}>
                <img src={image.url} alt={`${service.title} project ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="service-more-section">
          <div className="service-section-heading">
            <p>Explore More</p>
            <h2>Our Services</h2>
          </div>

          <div className="service-links-grid">
            {otherServices.map((item) => (
              <Link to={`/services/${item.slug}`} className="service-link-card" key={item.slug}>
                <img src={item.coverImage} alt={item.title} />
                <div className="service-link-overlay" />
                <div className="service-link-content">
                  <h3>{item.title}</h3>
                  <span>View service</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer logo={<TfiHome />} />
    </>
  );
}
