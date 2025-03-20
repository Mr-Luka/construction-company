

export default function ProjectPortfolio({project, description, img, alt}){
    return (
         <div className='our-work'>
                <div className='project'>
                    <h2>{project}</h2>
                    <p>{description}</p>
                    <img src={img} alt={alt}/>
                </div>
                <button>See More</button>
            </div>
    )
}