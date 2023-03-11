import React from "react";

const Radio = ({ options, value, setValue, pergunta }) => {
  return (
    <>
      <fieldset>
        <legend style={{ fontWeight: "bold", marginBottom: "1rem" }}>{pergunta}</legend>
        {options.map((option) => {
          return (
            <label key={option} style={{ marginBottom: "1rem", fontFamily: "monospace" }}>
              <input
                type="radio"
                value={option}
                checked={value === option}
                onChange={({ target }) => {
                  return setValue(target.value);
                }}
              />
              {option}
            </label>
          );
        })}
      </fieldset>
    </>
  );
};

export default Radio;
