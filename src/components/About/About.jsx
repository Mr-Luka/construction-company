import {useRef} from 'react';
import './About.css';
import bojana from '../../assets/imgs/bojana-photo.jpeg';


export default function About ({aboutRef}){

    return (
        <>
            <div className="about" ref={aboutRef}>
                <h1>About Us</h1>
                <div className='about-me'>
                    <p>Our mission is to help homeowners in Southern California bring their vision to life by creating by creating
                        beautiful, functional and lasting spaces. We believe in honest communication, attention
                        to detail, and treating every home as if it were our own.</p>
                    <div className='my-picture'>
                        <img src={bojana} alt='CEO Bojana' />
                    </div>
                </div>
            </div>
        </>
    )
}