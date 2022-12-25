import { useState } from "react";
import Question from "../Question";
import Success from "../Success";
import ProgressBar from "../ProgressBar";
import { QustionsType } from "../interface";

interface QustionsProps {
  questionsList: Array<QustionsType>;
}

const List = ({ questionsList }: QustionsProps) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const chooseVariant = (variantIndex: number) => {
    setStep(step + 1);
    if (variantIndex === questionsList[step].correct) {
      setCorrect(correct + 1);
    }
  };

  const toStart = () => {
    setStep(0);
    setCorrect(0);
  };

  const procentage = +((step / questionsList.length) * 100).toFixed(0);
  const correctProcentage = +((correct / questionsList.length) * 100).toFixed(0);

  return (
    <div className="quiz">
      <ProgressBar procentage={procentage} />
      {step !== questionsList.length ? (
        <Question choosedVariant={chooseVariant} currentQuestion={questionsList[step]} />
      ) : (
        <Success
          correctProcentage={correctProcentage}
          correctVariant={correct}
          questionsLenth={questionsList.length}
          toStart={toStart}
        />
      )}
    </div>
  );
};

export default List;
