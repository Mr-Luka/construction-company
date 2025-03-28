import './Testimonials.css';
import TestemonicalContainer from './Testemonial-container.jsx';
import TestimonialsRow from './Testimonials-row.jsx';

import {testimonialVideos, testimonialData, ratings} from './Testimonial-object-people.js';


export default function Testemonials (){

    return (
        <>
            <div className="testimonials-wrapper">
                <h1>The Voice of our Clients</h1>
                <div className='video-and-text-testimonials'>
                    <div className="video-div"> 
                        <video src={testimonialVideos[0].video} type='video/mp4' autoPlay loop muted playsInline className='testimonial-video'></video>
                    </div>
                    <div className='testimonials-container'>
                        <TestemonicalContainer
                            imgRating={ratings[0].fiveStars}
                            text={testimonialData[0].text}
                            imgFace={testimonialData[0].image}
                            name={testimonialData[0].name}
                            profession={testimonialData[0].profession} 
                        />
                        <TestemonicalContainer
                            imgRating={ratings[0].fiveStars}
                            text={testimonialData[1].text}
                            imgFace={testimonialData[1].image}
                            name={testimonialData[1].name}
                            profession={testimonialData[1].profession} 
                        />
                        <TestemonicalContainer
                            imgRating={ratings[2].fourAndHalfStars}
                            text={testimonialData[2].text}
                            imgFace={testimonialData[2].image}
                            name={testimonialData[2].name}
                            profession={testimonialData[2].profession} 
                        />
                    </div>
                </div>
                <div className='row-testimonials'>
                    <TestimonialsRow 
                        imageRatingRow={ratings[2].fourAndHalfStars}
                        textRow={testimonialData[3].text}
                        imgFaceRow={testimonialData[3].image}
                        nameRow={testimonialData[3].name}
                        professionRow={testimonialData[3].profession}
                    />
                    <TestimonialsRow 
                        imageRatingRow={ratings[0].fiveStars}
                        textRow={testimonialData[4].text}
                        imgFaceRow={testimonialData[4].image}
                        nameRow={testimonialData[4].name}
                        professionRow={testimonialData[4].profession}
                    />
                    <TestimonialsRow 
                        imageRatingRow={ratings[0].fiveStars}
                        textRow={testimonialData[5].text}
                        imgFaceRow={testimonialData[5].image}
                        nameRow={testimonialData[5].name}
                        professionRow={testimonialData[5].profession}
                    />
                </div>
                <div className='video-and-text-testimonials-2'>
                    <div className="video-div"> 
                        <video src={testimonialVideos[1].video} type='video/mp4' autoPlay loop muted playsInline className='testimonial-video'></video>
                    </div>
                    <div className='testimonials-container'>
                        <TestemonicalContainer
                            imgRating={ratings[0].fiveStars}
                            text={testimonialData[6].text}
                            imgFace={testimonialData[6].image}
                            name={testimonialData[6].name}
                            profession={testimonialData[6].profession} 
                        />
                        <TestemonicalContainer
                            imgRating={ratings[3].threeAndHalfStars}
                            text={testimonialData[7].text}
                            imgFace={testimonialData[7].image}
                            name={testimonialData[7].name}
                            profession={testimonialData[7].profession} 
                        />
                        <TestemonicalContainer
                            imgRating={ratings[0].fiveStars}
                            text={testimonialData[8].text}
                            imgFace={testimonialData[8].image}
                            name={testimonialData[8].name}
                            profession={testimonialData[8].profession} 
                        />
                    </div>
                </div>
                <div className='row-testimonials'>
                    <TestimonialsRow 
                        imageRatingRow={ratings[0].fiveStars}
                        textRow={testimonialData[9].text}
                        imgFaceRow={testimonialData[9].image}
                        nameRow={testimonialData[9].name}
                        professionRow={testimonialData[9].profession}
                    />
                    <TestimonialsRow 
                        imageRatingRow={ratings[4].twoAndHalfStars}
                        textRow={testimonialData[10].text}
                        imgFaceRow={testimonialData[10].image}
                        nameRow={testimonialData[10].name}
                        professionRow={testimonialData[10].profession}
                    />
                    <TestimonialsRow 
                        imageRatingRow={ratings[0].fiveStars}
                        textRow={testimonialData[11].text}
                        imgFaceRow={testimonialData[11].image}
                        nameRow={testimonialData[11].name}
                        professionRow={testimonialData[11].profession}
                    />
                </div>
            </div>
        </>
    )
}