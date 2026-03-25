import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaChevronRight, FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/imgs/logo-house.png';
import './NavBar.css';


export default function NavBar({
  contactRef,
  servicesRef,
  aboutRef,
  isMenuOpen,
  setIsMenuOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }

  function goHome() {
    navigate('/');
    closeMenu();

    if (location.pathname === '/') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  }

  function scrollToRef(ref) {
    navigate('/');
    closeMenu();

    setTimeout(() => {
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  }

  function openService(serviceSlug) {
    navigate(`/services/${serviceSlug}`);
    closeMenu();
  }

  return (
    <>
      <header>
        <div className="navBar-container">
          <nav>
            <button className="logo" onClick={goHome} aria-label="Go to home">
                <img src={logo} alt="Neighborhood Remodeling" className="logo-img1" />
            </button>
            <div className="nav-center-text">
              <h3>Contractor: Bojana Vujosevic</h3>
              <p>License # 1107770</p>
            </div>
            <button
              className="sideBar-icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaXmark /> : <FaBarsStaggered />}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-top">
        </div>

        <ul className="drawer-links">
          <li>
            <button onClick={goHome}>Home</button>
          </li>

          <li className="has-submenu">
            <button
              className="submenu-trigger"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
            >
              <span>Services</span>
              {isServicesOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            <div className={`submenu ${isServicesOpen ? 'open' : ''}`}>
              <button onClick={() => scrollToRef(servicesRef)}>All Services</button>
              <button onClick={() => openService('hardscaping-landscaping')}>
                Hardscaping & Landscaping
              </button>
              <button onClick={() => openService('roofing-insulation')}>
                Roofing & Insulation
              </button>
              <button onClick={() => openService('exterior-interior-paint')}>
                Exterior & Interior Paint
              </button>
              <button onClick={() => openService('fencing')}>
                Fencing
              </button>
              <button onClick={() => openService('flooring')}>
                Flooring
              </button>
              <button onClick={() => openService('windows')}>
                Windows
              </button>
              <button onClick={() => openService('kitchen-remodeling')}>
                Kitchen Remodeling
              </button>
              <button onClick={() => openService('bathroom-remodeling')}>
                Bathroom Remodeling
              </button>
              <button onClick={() => openService('adu-custom-homes')}>
                ADU & Custom Homes
              </button>
            </div>
          </li>

          <li>
            <button onClick={() => scrollToRef(aboutRef)}>About Us</button>
          </li>

          <li>
            <button onClick={() => scrollToRef(contactRef)}>Contact Us</button>
          </li>
        </ul>
      </aside>
    </>
  );
}
