import QuizAnswer from "./QuizAnswer";
import { createMarkUp } from "../utility/helpers";

const QuizQuestion = ({ question, correctAnswer, choices }) => (
  <li className="trivia-list-item">
    <h2 
      className="question" 
      dangerouslySetInnerHTML={createMarkUp(question)}></h2>

    <ul className="answer-list">
      {choices.map(choice => (
        <QuizAnswer
          key={choice.id}
          {...choice}
        />
      ))}
    </ul>
  </li>
);

export default QuizQuestion;