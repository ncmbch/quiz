import { useState } from 'react';
import Question from './Question';
import Results from './Results';

export default function Quiz({ questions, setPlaying, category }) {
  const [points, setPoints] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showEndResults, setShowEndResults] = useState(false);

  const getQuestionsByCategory = () => {
    return questions.filter((question) => question.category === category);
  };

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-16">
      {!showEndResults ? (
        <Question
          questions={getQuestionsByCategory()}
          showResults={showResults}
          setShowResults={setShowResults}
          setShowEndResults={setShowEndResults}
          points={points}
          setPoints={setPoints}
        />
      ) : (
        <Results questions={getQuestionsByCategory()} points={points} setPlaying={setPlaying} />
      )}
    </div>
  );
}
