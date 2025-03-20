import './LicenseContact.css';
import { IoMdMail } from "react-icons/io";

export default function LicenseContact(){
    return (
        <div class="contact-bar">
            <div class="left-section">
                <span class="license">License # 5594423</span>
                <span class="hiring">We're Hiring!</span>
            </div>
            <div class="right-section">
                <span class="email"><IoMdMail /> neighborhood.remodeling@gmail.com</span>
            </div>
        </div>
    )
}