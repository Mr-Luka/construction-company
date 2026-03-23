import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBarsStaggered, FaXmark, FaChevronRight, FaChevronDown } from 'react-icons/fa6';
import { TfiHome } from 'react-icons/tfi';
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

  function openPortfolioCategory(projectKey) {
    navigate(`/portfolio?project=${projectKey}`);
    closeMenu();
  }

  return (
    <>
      <header>
        <div className="navBar-container">
          <nav>
            <button className="logo" onClick={goHome} aria-label="Go to home">
                <TfiHome size="1.35rem" />
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
          <button className="drawer-logo" onClick={goHome}>
            <TfiHome />
            <span>Neighborhood Remodeling</span>
          </button>

          <button className="drawer-close" onClick={closeMenu} aria-label="Close menu">
            <FaXmark />
          </button>
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
              <button onClick={() => openPortfolioCategory('hardscaping_landscaping')}>
                Hardscaping & Landscaping
              </button>
              <button onClick={() => openPortfolioCategory('roofs')}>
                Roofing & Insulation
              </button>
              <button onClick={() => openPortfolioCategory('paint')}>
                Exterior & Interior Paint
              </button>
              <button onClick={() => openPortfolioCategory('windows')}>
                Windows
              </button>
              <button onClick={() => openPortfolioCategory('kitchen')}>
                Kitchen
              </button>
              <button onClick={() => openPortfolioCategory('bathrooms')}>
                Bathroom
              </button>
            </div>
          </li>

          <li>
            <button onClick={() => scrollToRef(aboutRef)}>About Us</button>
          </li>

          <li>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          </li>

          <li>
            <button onClick={() => scrollToRef(contactRef)}>Contact Us</button>
          </li>
        </ul>
      </aside>
    </>
  );
}