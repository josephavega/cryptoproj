import React from "react";
import { Fieldset } from "react95";

const CaesarExplanation = ({ caesarData }) => {
  const { message, key, result, mode } = caesarData;

  const explanation = () => {
    if (!message || !key || !result || !mode)
      return "No operation performed yet.";
    const action = mode === "encrypt" ? "shifted forward" : "shifted backward";
    return `You chose to ${mode} the message "${message}" using a key of ${key}.
    Each letter was ${action} by ${key} positions in the alphabet.
    The final result is: "${result}".`;
  };

  return (
    <Fieldset label="Explanation">
      <p>{explanation()}</p>
    </Fieldset>
  );
};

export default CaesarExplanation;
