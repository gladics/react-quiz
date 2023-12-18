function Progress({ index, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions + 1} value={index + 1}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
