import {useRef} from 'react';

import './LicenseContact.css';
import { IoMdMail } from "react-icons/io";

export default function LicenseContact({license, email}){
    return (
        <div className="contact-bar" >
            <div className="left-section">
                <span className="license">License # {license}</span>
                <span className="hiring">We're Hiring!</span>
            </div>
            <div className="right-section">
                <span className="email"><IoMdMail /> {email}</span>
            </div>
        </div>
    )
}