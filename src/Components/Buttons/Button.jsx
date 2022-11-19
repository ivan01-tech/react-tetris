import React from "react";
import { ButtonWrap } from "./Button.elements";

function Button({ text, gameOver }) {
  return <ButtonWrap gameOver={gameOver}>{text}</ButtonWrap>;
}

export default Button;
