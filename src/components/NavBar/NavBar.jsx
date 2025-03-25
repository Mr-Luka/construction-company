import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { TfiHome } from 'react-icons/tfi';
import './NavBar.css';

export default function NavBar({ contactRef, servicesRef, aboutRef, isMenuOpen, setIsMenuOpen, closeMenu }) { // Add props
    const navigate = useNavigate();

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleHomeClick() {
        if(location.pathname === '/'){
            //if already on home page, refresh
            window.location.reload();
        } else {
            // if on another page, navigate to home 
            navigate('/');
        }
        setIsMenuOpen(false);
    }

    function handleContactClick() {
        navigate('/');
        setTimeout(() => {
            if (contactRef.current) {
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        setIsMenuOpen(false);
    }

    function handleServicesClick() {
        navigate('/');
        setTimeout(() => {
            if (servicesRef.current) {
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        setIsMenuOpen(false);
    }

    function handleAboutUsClick() {
        navigate('/');
        setTimeout(() => {
            if (aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        setIsMenuOpen(false);
    }

    return (
        <>
            <header>
                <div className="navBar-container">
                    <nav>
                        <div className="logo">
                            <h2>
                                <TfiHome size="1.5rem" onClick={handleHomeClick}/>
                            </h2>
                        </div>
                        <ul className={isMenuOpen ? 'nav-link active' : 'nav-link'}>
                            <li>
                                <a onClick={handleHomeClick}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a onClick={handleAboutUsClick}>About</a>
                            </li>
                            <li>
                                <a onClick={handleServicesClick}>Services</a>
                            </li>
                            <li>
                                <Link to='/portfolio' onClick={closeMenu}>Portfolio</Link> {/* Close menu on click */}
                            </li>
                            <li>
                                <a onClick={handleContactClick}>Contact Us</a>
                            </li>
                        </ul>
                        <div className="sideBar-icon" onClick={toggleMenu}>
                            <FaBarsStaggered color="white" />
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}