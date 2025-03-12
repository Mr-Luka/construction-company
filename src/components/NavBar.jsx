import {useState} from 'react';

import { FaBarsStaggered } from "react-icons/fa6";
import { TfiHome } from "react-icons/tfi";

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
                            <h2>logo image</h2>
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
            <section>
                <div className='navBar-container'>
                    <div className='responsive-navBar-content'>
                        <h2>Eco<span className='house-icon'>{<TfiHome size='7rem'/>}</span>Rise</h2>
                        <h3>construction</h3>
                    </div>

                </div>
            </section>
        </>
    )
}