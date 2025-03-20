import './Portfolio.css';
import ProjectPortfolio from './Project-portfolio.jsx';

export default function Portfolio(){

    return(
        <div className="portfolio-wrapper">
            <h1>Portfolio</h1>
            <ProjectPortfolio project='Roofs' description='Our roofs are strong' />
            <ProjectPortfolio project='Windows' description='Our windows are strong' />
            <ProjectPortfolio project='Paint' description='Our paints are strong' />
            <ProjectPortfolio project='Backyard' description='Our backyards are strong' />
            <ProjectPortfolio project='Kitchen' description='Our kitchens are strong' />
            <ProjectPortfolio project='Bathroom' description='Our bathrooms are strong' />
        </div>
    )
}