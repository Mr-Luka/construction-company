import {useRef} from 'react';

import './LicenseContact.css';
import { IoMdMail } from "react-icons/io";

export default function LicenseContact({license, email}){
    return (
        <div class="contact-bar" >
            <div class="left-section">
                <span class="license">License # {license}</span>
                <span class="hiring">We're Hiring!</span>
            </div>
            <div class="right-section">
                <span class="email"><IoMdMail /> {email}</span>
            </div>
        </div>
    )
}