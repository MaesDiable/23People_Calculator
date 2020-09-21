import React from "react";
import PropTypes from "prop-types";
import "../styles/Display.css";

const Display = ({ initialValue, expression, resultExpression }) => {
  return (
    <div className="result-display">
      <label htmlFor="id-input">
        <input
          disabled="true"
          id="id-input"
          className="input-value"
          type="text"
          placeholder={`${initialValue}`}
          value={expression}
        />
        Result: {resultExpression}
      </label>
    </div>
  );
};

Display.propTypes = {
  initialValue: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
  resultExpression: PropTypes.func.isRequired,
};

export default Display;
