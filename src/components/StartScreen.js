function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Halihó</h2>
      <h3>{numQuestions} question</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
