import React, {useState} from 'react';
import {fetchQuizQuestions} from './API'
import QuestionCard from './components/QuestionCard'

import {QuestionState, Difficulty} from './API'

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;


const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))


  const startTrivia = async () => {

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React QUIZ</h1>
      <button onClick={startTrivia}>start</button>
      <p>Score</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard 
      // array +1 해서 질문 1 만듬
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
