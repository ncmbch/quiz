import Head from 'next/head';
import Axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Quiz from '../components/Quiz';
import { useState } from 'react';

export async function getServerSideProps(context) {
  const res = await Axios.get('https://opentdb.com/api.php?amount=10');

  return {
    props: {
      questions: res.data.results,
    },
  };
}

export default function Home({ questions }) {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Head>
        <title>Quizmania</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-blueGray-100 px-4 py-16 text-blueGray-700">
        {playing ? (
          <Quiz questions={questions} />
        ) : (
          <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-16 bg-white rounded shadow p-4">
            <h1 className="text-3xl text-center font-medium border-b pb-4 border-blueGray-300 mb-4">Wilkommen bei Quizmania</h1>
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-4 lg:col-span-1">
                <h3 className="text-2xl">User</h3>
              </div>
              <div className="col-span-4 lg:col-span-2 text-center">
                <h3 className="text-2xl">The Game</h3>
                <p className="text-blueGray-500 my-4">
                  Press Play to start the Game as <strong>Guest</strong>
                </p>
                <button
                  className="px-4 py-2 text-xl bg-lightBlue-500 text-white font-semibold uppercase tracking-wider rounded shadow w-full transition hover:bg-lightBlue-600"
                  onClick={() => setPlaying(true)}
                >
                  Play
                </button>
              </div>
              <div className="col-span-4 lg:col-span-1">
                <h3 className="text-2xl">Highscores</h3>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
