import { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import blueBlob from "./assets/blue-blob.png";
import yellowBlob from "./assets/yellow-blob.png";

function App() {
  const [ startQuiz, setStartQuiz ] = useState(false);

  return (
    <>
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
        { startQuiz 
          ? <Quiz />
          : (<Intro 
              onStart={() => setStartQuiz(true)} 
            />)}
    </>
  )
}

export default App
