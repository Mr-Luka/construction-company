import {useState} from 'react';

export default function ProjectPortfolio({project, description, img, alt}){
    const [buttonClicked, setButtonClicked] = useState(false);
    function handleClick(){
        setButtonClicked(true);
    }

    return (
         <div className='our-work'>
                <div className='project'>
                    <h2>{project}</h2>
                    <p>{description}</p>
                    <img src={img} alt={alt}/>
                </div>
                <button onClick={handleClick}>See More</button>
            </div>
    )
}