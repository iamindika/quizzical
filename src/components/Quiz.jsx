import { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import { buildTrivia } from "../utility/helpers";

const Quiz = () => {
  const [ trivia, setTrivia ] = useState(null);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then(res => res.json())
      .then(res => {
        buildTrivia(res.results)
          .then(mappedResults => setTrivia(mappedResults))
          .catch(e => {
            console.warn(e.message);
            throw new Error("Error building trivia questions!");
          }) 
      })
      .catch(e => {
        console.warn(e.message);
        throw new Error("Error fetching trivia questions!")
      })
  }, []);

  return (
    <main className="trivia container">
      <h1 className="trivia-title">Quizzical</h1>

      <ul className="trivia-list">
        {trivia && trivia.map(({ id, ...rest }) => (
          <QuizQuestion
            key={id}
            {...rest}
          />
        ))}
      </ul>
    </main>
  )
}

export default Quiz