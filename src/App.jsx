import video from './assets/imgs/video-const.mp4';
import { TfiHome } from "react-icons/tfi";


import NavBar from './components/NavBar/NavBar.jsx'
import About from './components/About/About.jsx';
import ImageSlider from './components/Portfolio-image-slider/Portfolio-image-slider.jsx';

function App() {
  return (
    <>
     <div className="video-container">
        <video src={video} type="video/mp4" autoPlay loop muted playsInline className="video-background">
        </video>
        <NavBar />
        <main className='main-content'>
          <div className='ecorise-text'>
              <span className='house-icon'>{<TfiHome />}</span>
              <h2>Neighborhood</h2>
              <h3>REMODELING</h3>
          </div>
          <div className='information-wrapper'>
            <h4>Our Projects</h4>
            <ImageSlider />
            <About />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
