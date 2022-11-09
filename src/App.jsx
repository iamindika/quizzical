import { useState } from "react";
import Intro from "./components/Intro";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

function App() {
  const [ startQuiz, setStartQuiz ] = useState(false);

  return (
    <>
      { startQuiz 
        ? null
        : (<Intro 
            onStart={() => setStartQuiz(true)} 
          />)}
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
    </>
  )
}

export default App
