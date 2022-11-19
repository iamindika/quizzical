import { useState } from "react";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";

function App() {
  const [ startQuiz, setStartQuiz ] = useState(false);

  const handleStart = () => setStartQuiz(true)

  return startQuiz 
    ? <Quiz />
    : <Intro 
        onStart={handleStart} 
      />
}

export default App
