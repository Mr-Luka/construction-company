

export default function TestemonialContainer({video, imgRating, text, imgFace, name, profession }){


    return (
        <>
            <div className='all-Testomonials'>
                <div className='video-and-text-testimonials'>
                    <video src={video}></video>
                    <div className='testimonials-container'>
                        <div className='testimonial'>
                            <img className='imageRating' src={imgRating} />
                            <p>{text}</p>
                            <div className='reviewer-image-name-container'>
                                <img className='customer-face' src={imgFace} />
                                <div className='name-profession'>
                                    <h2>{name}</h2>
                                    <p>{profession}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}