import { QustionsType } from "../interface";

interface currentQuestionProps {
  currentQuestion: QustionsType;
  choosedVariant: (e: number) => void;
}

const Question = ({ currentQuestion, choosedVariant }: currentQuestionProps) => {
  return (
    <div className="question">
      <p className="title">{currentQuestion.question}</p>
      <div className="buttons">
        {currentQuestion.varinats.map((variantItem, variantIndex) => {
          return (
            <button className="btn" onClick={() => choosedVariant(variantIndex)} key={variantItem}>
              {variantItem}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
