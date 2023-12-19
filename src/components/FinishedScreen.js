function FinishedScreen({ points, maxPoints, highScore }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80 && percentage < 100) emoji = "🥳";
  else if (percentage >= 50 && percentage < 80) emoji = "🙂";
  else if (percentage >= 10 && percentage < 50) emoji = "🤨";
  else emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> points out of {maxPoints}.
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(HighScore: {highScore} points)</p>
    </>
  );
}

export default FinishedScreen;
