import React from "react";
import PropTypes from "prop-types";

const Display = ({initialValue,expression,setExpression,resultExpression}) => {
    return (
        <div>
            <div>
                <input
                    className="input-value"
                    type="text"
                    placeholder={`${initialValue}`}
                    value={expression}
                    onChange={(event) => {
                        setExpression(event.target.value);
                    }}
                />
            </div>
            <div className="result-label">
                <label>Result: {resultExpression}</label>
            </div>
        </div>
    );
};

Display.propTypes={
    initialValue : PropTypes.string.isRequired,
    expression : PropTypes.string.isRequired,
    setExpression :PropTypes.func.isRequired,
    resultExpression :PropTypes.func.isRequired
}

export default Display;
