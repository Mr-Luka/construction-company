import './Testimonials.css';
import TestemonicalContainer from './Testemonial-container.jsx';
import TestimonialsRow from './Testimonials-row.jsx';




export default function Testemonials (){

    return (
        <>
            <div className="testimonials-wrapper">
                <h1>The Voice of our Clients</h1>
                <TestemonicalContainer
                    video={}
                    imgRating={}
                    text={}
                    imgFace={}
                    name={}
                    profession={} 
                />
                <TestimonialsRow 
                    imageRatingRow={}
                    textRow={}
                    imgFaceRow={}
                    nameRow={}
                    professionRow={}

                />
            </div>
        </>
    )
}