import blueBlob from "../assets/blue-blob.png";
import yellowBlob from "../assets/yellow-blob.png";

const Intro = ({ onStart }) => (
  <div className="wrapper">
    <main className="intro container">
      <h1 className="intro-title">Quizzical</h1>
      <p className="intro-desc">Test your knowledge in various categories, with varying degrees of difficulty!</p>
      <button 
        className="intro-btn"
        onClick={onStart}
      >Start Quiz</button>
    </main>
    <img 
      className="blob--left"
      src={blueBlob}
      alt=""
      />
    <img 
      className="blob--right"
      src={yellowBlob}
      alt=""
      />
  </div>
);

export default Intro;