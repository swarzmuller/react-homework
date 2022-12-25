interface CorrectProps {
  correctVariant: number;
  questionsLenth: number;
  correctProcentage: number;
  toStart: any;
}

const Success = ({ correctVariant, questionsLenth, correctProcentage, toStart }: CorrectProps) => {
  return (
    <div className="score">
      <p className="score__number">
        Correct answers {correctVariant} from {questionsLenth}
      </p>
      {correctProcentage > 60 ? (
        <p className="title success">
          Congatulations! <br /> Test is Passed <br /> Your score: <span className="procent">{correctProcentage}%</span>
        </p>
      ) : (
        <>
          <p className="title error">
            Missed <br /> Your score: <span className="procent">{correctProcentage}%</span>
          </p>
          <button className="btn" onClick={toStart}>
            TryAgain
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
