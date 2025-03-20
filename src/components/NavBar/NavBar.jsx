import { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import { TfiHome } from 'react-icons/tfi';
import './NavBar.css';

export default function NavBar({contactRef, servicesRef, aboutRef}) {
    const [isOpen, setIsOpen] = useState(false); // Initialize isOpen to false

    function toggleMenu() {
        setIsOpen(isOpen=> !isOpen);
    }

    function handleHomeClick(){
        window.location.reload();
        setIsOpen(false);
    }

    function handleContactClick(){
        if(contactRef.current){
            contactRef.current.scrollIntoView({behavior: 'smooth'}) // scroll to the ref
        }
        setIsOpen(false); // close the menu if open
    }

    function handleServicesClick(){
        if(servicesRef.current){
            servicesRef.current.scrollIntoView({behavior: 'smooth'}) // scroll to the servicesRef
        }
        setIsOpen(false);
    }

    function handleAboutUsClick(){
        if(aboutRef.current){
            aboutRef.current.scrollIntoView({behavior: 'smooth'}) // scroll to the aboutRef
        }
        setIsOpen(false);
    }


    return (
        <>
            <header >
                <div className="navBar-container">
                    <nav>
                        <div className="logo">
                            <h2>
                                <TfiHome size="1.5rem" />
                            </h2>
                        </div>
                        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
                            <li>
                                <a onClick={handleHomeClick} className="active">
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
                                <a href="#">Portfolio</a>
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