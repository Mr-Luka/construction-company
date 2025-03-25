import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { TfiHome } from 'react-icons/tfi';
import './NavBar.css';

export default function NavBar({ contactRef, servicesRef, aboutRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    function handleHomeClick() {
        navigate('/');
        setIsOpen(false);
    }

    function handleContactClick() {
        navigate('/'); // Navigate to home
        setTimeout(() => { // Delay to ensure navigation completes
            if (contactRef.current) {
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust delay if needed
        setIsOpen(false);
    }

    function handleServicesClick() {
        navigate('/'); // Navigate to home
        setTimeout(() => { // Delay to ensure navigation completes
            if (servicesRef.current) {
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust delay if needed
        setIsOpen(false);
    }

    function handleAboutUsClick() {
        navigate('/'); // Navigate to home
        setTimeout(() => { // Delay to ensure navigation completes
            if (aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust delay if needed
        setIsOpen(false);
    }

    return (
        <>
            <header>
                <div className="navBar-container">
                    <nav>
                        <div className="logo">
                            <h2>
                                <TfiHome size="1.5rem" />
                            </h2>
                        </div>
                        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
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
                                <Link to='/portfolio'>Portfolio</Link>
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