import React from "react";
import PropTypes from "prop-types";
import "../styles/Panel.css";

const buttonsValue = [
  "(",
  ")",
  "%",
  "*",
  7,
  8,
  9,
  "/",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  0,
  ".",
];

const Panel = ({
  expression,
  setExpression,
  calculateAndShow,
  setResultExpression,
}) => {
  const buttonsRender = buttonsValue.map((button) => {
    return (
      <button
        type="button"
        key={`${button}`}
        value={`${button}`}
        onClick={(event) =>
          setExpression(`${expression}${event.target.value}`)
        }
      >
        {button}
      </button>
    );
  });
  const buttonAC = (
    <button
      type="button"
      key="AC"
      value="0"
      onClick={() => {
        setResultExpression("");
        setExpression("");
      }}
    >
      AC
    </button>
  );
  const buttonResult = (
    <button
      type="button"
      key="="
      value="="
      onClick={() => calculateAndShow(`${expression}`)}
    >
      =
    </button>
  );
  return (
    <div className="calculator-buttons">
      {buttonsRender}
      {buttonAC}
      {buttonResult}
    </div>
  );
};

Panel.propTypes = {
  expression: PropTypes.string.isRequired,
  setExpression: PropTypes.func.isRequired,
  calculateAndShow: PropTypes.func.isRequired,
  setResultExpression: PropTypes.func.isRequired,
};

export default Panel;
