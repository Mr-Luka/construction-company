import NavBar from './components/NavBar.jsx';
import video from './assets/imgs/video-const.mp4'

function App() {
  return (
    <>
     <div className="video-container">
        <video src={video} type="video/mp4" autoPlay loop muted playsInline className="video-background">
        </video>
        <NavBar />
      </div>
    </>
  );
}

export default App;
