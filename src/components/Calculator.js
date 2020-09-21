import React, { useState } from "react";
import PropTypes from "prop-types";
import Display from "./Display";
import "../styles/Calculator.css";

const Mathjs = require("mathjs");

const calculateExpression = (expression) => {
  try {
    return Mathjs.evaluate(expression);
  } catch (e) {
    return "Wrong Expression";
  }
};

const Calculator = ({ initialValue }) => {
  const [expression, setExpression] = useState("");
  const [resultExpression, setResultExpresion] = useState("");

  const calculateAndShow = (expressionValue) => {
    return setResultExpresion(calculateExpression(expressionValue));
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <Display
          expression={expression}
          initialValue={initialValue}
          resultExpression={resultExpression}
        />
      </div>
    </div>
  );
};

Calculator.propTypes = {
  initialValue: PropTypes.string.isRequired,
};

export default Calculator;
