import {useState} from 'react';

import { FaBarsStaggered } from "react-icons/fa6";
import { TfiHome } from "react-icons/tfi";
import './NavBar.css';

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }


    return (
        <>
            <header>
                <div className='navBar-container'>
                    <nav>
                        <div className='logo'>
                            <h2><TfiHome size="2rem"/></h2>
                        </div>
                        <ul className={isOpen ? 'nav-link active' : 'nav-link'}>
                            <li><a href='#' className='active'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Services</a></li>
                            <li><a href='#'>Portfolio</a></li>
                            <li><a href='#'>Contact Me</a></li>
                        </ul>
                        <div className='sideBar-icon' onClick={toggleMenu}>
                           <FaBarsStaggered color='white'/> 
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}