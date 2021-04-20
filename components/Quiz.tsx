import { useState } from 'react';

export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showEndResults, setShowEndResults] = useState(false);

  const checkQuestion = (answer) => {
    setShowResults(true);
    setTimeout(() => {
      setShowResults(false);
      if (index === questions.length - 1) {
        setShowEndResults(true);
      } else {
        setIndex(index + 1);
      }
    }, 3000);
    if (answer === questions[index].correct_answer) {
      setPoints(points + 1);
    }
  };

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-16">
      {!showEndResults ? (
        <>
          <h1 className="text-center text-2xl mb-8">{questions[index].question}</h1>
          <div className="grid grid-cols-2 gap-8">
            {questions[index].incorrect_answers.map((answer, i) => (
              <button
                key={i}
                className={`p-4 bg-white rounded shadow transition font-semibold text-2xl ${
                  showResults && (answer === questions[index].correct_answer ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
                }`}
                onClick={() => checkQuestion(answer)}
                disabled={showResults}
              >
                {answer.toString()}
              </button>
            ))}
            <button
              className={`p-4 bg-white rounded shadow transition font-semibold text-2xl ${
                showResults &&
                (questions[index].correct_answer === questions[index].correct_answer ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
              }`}
              onClick={() => checkQuestion(questions[index].correct_answer)}
              disabled={showResults}
            >
              {questions[index].correct_answer.toString()}
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-4xl text-center mb-8">Deine Ergebnisse</h1>
          <p>
            Richtig beantwortete Fragen: <strong>{points}</strong>
          </p>
          <p>
            Falsch beantwortete Fragen: <strong>{questions.length - points}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
