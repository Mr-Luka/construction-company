import './Portfolio.css';
import ProjectPortfolio from './Project-portfolio.jsx';

import kitchen from '../../assets/imgs/kitchen1.jpeg'

export default function Portfolio(){

    return(
        <div className="portfolio-wrapper">
            <h1>Our Projects</h1>
            <div className='our-projects'>
                <ProjectPortfolio project='Roofs' img={kitchen} description='Our roofs are strong' />
                <ProjectPortfolio project='Windows' img={kitchen} description='Our windows are strong' />
                <ProjectPortfolio project='Paint' img={kitchen} description='Our paints are strong' />
                <ProjectPortfolio project='Backyard' img={kitchen} description='Our backyards are strong' />
                <ProjectPortfolio project='Kitchen' img={kitchen} description='Our kitchens are strong' />
                <ProjectPortfolio project='Bathroom' img={kitchen} description='Our bathrooms are strong' />
            </div>
        </div>
    )
}