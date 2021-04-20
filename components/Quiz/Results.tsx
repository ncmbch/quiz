export default function Results({ questions, points, setPlaying }) {
  return (
    <div>
      <h1 className="text-4xl text-center mb-8">Deine Ergebnisse</h1>
      <div className="grid grid-cols-2 gap-4 text-xl">
        <div>
          <p className="text-green-600">
            Richtig beantwortete Fragen: <strong>{points}</strong>
          </p>
          <p className="text-red-600">
            Falsch beantwortete Fragen: <strong>{questions.length - points}</strong>
          </p>
        </div>
        <div>
          <p className="text-lightBlue-500 font-semibold text-right">Registriere dich um Gesamtpunkte zu sammeln</p>
        </div>
      </div>

      <button
        className="px-4 py-2 text-xl bg-lightBlue-500 text-white font-semibold uppercase tracking-wider rounded shadow w-full transition hover:bg-lightBlue-600 mt-8"
        onClick={() => setPlaying(false)}
      >
        Zurück zum Hauptbildschrim
      </button>
    </div>
  );
}
