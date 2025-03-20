import {useRef} from 'react';
import './About.css';
import bojana from '../../assets/imgs/bojana-photo.jpeg';


export default function About ({aboutRef}){

    return (
        <>
            <div className="about" ref={aboutRef}>
                <h1>About Us</h1>
                <div className='about-me'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='my-picture'>
                        <img src={bojana} alt='CEO Bojana' />
                    </div>
                </div>
            </div>
        </>
    )
}