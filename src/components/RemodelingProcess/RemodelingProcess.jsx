import './RemodelingProcess.css';

import { IoPeople } from "react-icons/io5";
import { GiPencilBrush } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { PiHouseLine } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa";


export default function RemodelingProcess(){

    return (
        <>
            <div className="remodeling-process">
                <h2 className='remodeling-title'>Our Remodeling Process</h2>
                <p className='remodeling-text'>Transforming your home should be an exciting and seamless experience. At Neighborhood Remodeling, we deliver top-tier craftsmanship with a meticulous process designed to enhance efficiency, prevent delays, and bring your vision to life. Whether it's a complete renovation or a targeted upgrade, we ensure every detail reflects the highest standards of quality and design.</p>
                <div className='remodeling-steps'>
                    <div className='remodeling-step'>
                        <span className='process-icon'><IoPeople /></span>
                        <p>1</p>
                        <p>FREE Consultation</p>
                    </div>
                    <div className='remodeling-step'>
                        <span className='process-icon'><GiPencilBrush /></span>
                        <p>2</p>
                        <p>Design & Estimate</p>
                    </div>
                    <div className='remodeling-step'>
                        <span className='process-icon'><GiNotebook /></span>
                        <p>3</p>
                        <p>Permit Application</p>
                    </div>
                    <div className='remodeling-step'>
                        <span className='process-icon'><PiHouseLine /></span>
                        <p>4</p>
                        <p>Build</p>
                    </div>
                    <div className='remodeling-step'>
                        <span className='process-icon'><FaThumbsUp /></span>
                        <p>5</p>
                        <p>Completion</p>
                    </div>

                </div>
            </div>
        </>
    )
}