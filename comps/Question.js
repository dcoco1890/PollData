import { useState, useEffect } from "react";
import API from "../utils/API";

const Question = props => {
  const [answer, setAnswer] = useState(0);

  return (
    <div>
      <span className="d-block w-100 h1 text-dark">{props.question}</span>
      <div className="my-5 pt-0 pb-5">
        {props.answers.map((choice, index) => {
          const selected = answer && answer === index + 1;
          const labelClass = [
            "custom-control-label pl-5 position-relative",
            selected ? "checked" : ""
          ].join(" ");
          return (
            <div
              key={index}
              className="custom-control custom-radio py-3 ml-2 d-flex align-items-center"
            >
              <input
                type="radio"
                className="custom-control-input"
                value={index}
                name="your-answer"
                id={`radio-num-${index + 1}`}
                checked={selected}
                onChange={evt => setAnswer(evt.target.id)}
              />
              <label
                className={labelClass}
                onClick={evt => setAnswer(index + 1)}
              >
                {choice}
              </label>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-primary text-uppercase my-5 ml-4 px-5 py-3 d-block"
        disabled={!answer}
        onClick={evt => {
          evt.preventDefault();
          API.submitChoice({
            choice: answer
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
