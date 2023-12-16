function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Halihó</h2>
      <h3>{numQuestions} question</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
