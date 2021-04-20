import { useEffect, useState } from 'react';

export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    questions.map((question) => {});
  }, []);

  return (
    <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-16">
      <h1 className="text-center text-2xl mb-8">{questions[index].question}</h1>
      <div className="grid grid-cols-2 gap-8">
        <button className="col-span-1 p-4 rounded bg-white shadow text-center font-semibold text-2xl transition hover:bg-lightBlue-100">
          {questions[index].correct_answer}
        </button>
      </div>
    </div>
  );
}
