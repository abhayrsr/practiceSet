import { useState } from "react";
import mcq from "./Data";

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const ques = mcq[index];
  const ans = mcq[index].answer;

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index < mcq.length - 1) {
      setIndex(index + 1);
    }
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }

  function handleAnswerCheck() {
    if (selected === ans) {
      setScore((prevScore) => prevScore + 5);
    }
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>{ques.question}</p>
      {Object.values(ques.options[0]).map((opt, idx) => (
        <div key={idx}>
          <input
            type="radio"
            value={opt}
            name={"questions-" + ques.id}
            onChange={handleChange}
            checked={selected === opt}
          />
          <label>{opt}</label>
        </div>
      ))}
      <button onClick={handlePrev}>prev</button>
      <button
        onClick={() => {
          handleAnswerCheck();
          handleNext();
        }}
      >
        next
      </button>
      {index === mcq.length - 1 && <h3>Score: {score}</h3>}
    </div>
  );
}
