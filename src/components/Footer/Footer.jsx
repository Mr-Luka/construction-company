import './Footer.css';

export default function Footer ({logo}){

    return (
        <div className="footer">
            <div className='neighborhood-text-footer'>
              <span className='house-icon-footer'>{logo}</span>
              <h2>Neighborhood</h2>
              <h3>REMODELING</h3>
          </div>
          <div className='contact-footer'>
            <h4>Contact</h4>
            <div className='contact-hours'>
                <span className='process-icon'> Mon - Fri: 8am - 6pm</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'> 800 - 555 -555</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'> neighborhood.remodeling@gmail.com</span>
            </div>
            <div className='contact-hours'>
                <span className='process-icon'>We are hiring!</span>
            </div>
          </div>
        </div>
    )
}