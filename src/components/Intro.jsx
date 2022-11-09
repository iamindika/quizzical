const Intro = ({ onStart }) => (
  <main className="intro">
    <h1 className="intro-title">Quizzical</h1>
    <p className="intro-desc">Test your knowledge in various categories, with varying degrees of difficulty!</p>
    <button 
      className="intro-btn"
      onClick={onStart}
    >Start Quiz</button>
  </main>
);

export default Intro;