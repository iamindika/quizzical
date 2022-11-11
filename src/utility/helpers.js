import { nanoid } from "nanoid";

function getCorrectAnswerId(choices, correctAnswer) {
  return choices.find(choice => choice.answer === correctAnswer).id
}

function buildAnswer(answer){
  return {
    id: nanoid(),
    answer, 
    selected: false
  };
} 

function buildAnswers(correctAnswer, incorrectAnswer) {
  const temp = [correctAnswer, ...incorrectAnswer];
  const choices = [];

  while(temp.length) {
    const randomIndex = Math.floor(Math.random() * temp.length)

    const randomChoice = temp.splice(randomIndex, 1)[0];
    choices.push(buildAnswer(randomChoice));
  }

  return { 
    correctAnswer: getCorrectAnswerId(choices, correctAnswer),
    choices
  }
}

function buildTriviaQuestion(entry) {
  return new Promise(resolve => {
    resolve({
      id: nanoid(),
      question: entry.question,
      ...buildAnswers(entry.correct_answer, entry.incorrect_answers)
    })
  })
}

export function buildTrivia(entries) {
  return Promise.all(entries.map(entry => buildTriviaQuestion(entry)))
}

export function createMarkUp(question) {
  return {
    __html: question
  }
}