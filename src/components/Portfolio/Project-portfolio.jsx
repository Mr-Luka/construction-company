export default function ProjectPortfolio({project, description, img, openModal}){
    return (

         <div className='our-work'>
                <div className='project'>
                    <h2>{project}</h2>
                    <p>{description}</p>
                    <img src={img} alt={`${project} project`}/>
                </div>
                <button onClick={openModal}>See More</button>
            </div>
    )
}