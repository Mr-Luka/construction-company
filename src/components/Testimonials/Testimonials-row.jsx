export default function TestimonialsRow({imageRatingRow, textRow, imgFaceRow, nameRow, professionRow}){
    return (
        <>
            <div className='row-testimonials'>
                    <div className='testimonial-row'>
                        <img className='imageRating-row' src={imageRatingRow} />
                        <p>{textRow}</p>
                        <div className='reviewer-image-name-container-row'>
                            <img className='customer-face-row' src={imgFaceRow} />
                            <div className='name-profession-row'>
                                <h2>{nameRow}</h2>
                                <p>{professionRow}</p>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-row'>
                        <img className='imageRating-row' src={imageRatingRow} />
                        <p>{textRow}</p>
                        <div className='reviewer-image-name-container-row'>
                            <img className='customer-face-row' src={imgFaceRow} />
                            <div className='name-profession-row'>
                                <h2>{nameRow}</h2>
                                <p>{professionRow}</p>
                            </div>
                        </div>
                    </div>
                    <div className='testimonial-row'>
                        <img className='imageRating-row' src={imageRatingRow} />
                        <p>{textRow}</p>
                        <div className='reviewer-image-name-container-row'>
                            <img className='customer-face-row' src={imgFaceRow} />
                            <div className='name-profession-row'>
                                <h2>{nameRow}</h2>
                                <p>{professionRow}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}