import List from "./List";
import { QustionsType } from "./interface";

import "./style.css";

const Quiz = () => {
  const questions: Array<QustionsType> = [
    {
      id: 1,
      question: "Capital of Poland?",
      varinats: ["Krakow", "Wroclaw", "Warshawa", "Kyiv"],
      correct: 2,
    },
    {
      id: 2,
      question: "Capital of Zimbabwe?",
      varinats: ["Cairo", "Dakka", "Kyiv", "Harare"],
      correct: 3,
    },
    {
      id: 3,
      question: "Capital of Brazil?",
      varinats: ["Glasgow", "Brasília", "Krakow", "Madrid"],
      correct: 1,
    },
    {
      id: 4,
      question: "Capital of Thailand?",
      varinats: ["Bangkok", "Delhi", "Manila", "Tokio"],
      correct: 0,
    },
  ];

  return <List questionsList={questions} />;
};

export default Quiz;
