import Head from 'next/head';
import Axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps(context) {
  const res = await Axios.get('https://opentdb.com/api.php?amount=10');

  return {
    props: {
      questions: res.data.results,
    },
  };
}

export default function Home({ questions }) {
  return (
    <>
      <Head>
        <title>Quizmania</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-blueGray-100 px-4 py-16 text-blueGray-700">
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto mt-16 bg-white rounded shadow p-4">
          <h1 className="text-3xl text-center font-medium border-b pb-4 border-blueGray-300">Wilkommen bei Quizmania</h1>
        </div>
      </main>

      <Footer />
    </>
  );
}
