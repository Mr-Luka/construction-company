import './WhatWeDo.css'

export default function WhatWeDo({img, service, alt}){

    return (
        <div className='what-we-do-wrapper-component'>
            <div className='what-we-do-section'>
                <img src={img} alt={alt} />
                <h5 className='service'>{service}</h5>
                <button>More Info</button>
            </div>
            <svg className='services-line hide-on-desktop' width="100%" height="10">
                <line x1="0" y1="5" x2="100%" y2="5" stroke="white" strokeWidth="2"/>
            </svg>
        </div>
    )
}