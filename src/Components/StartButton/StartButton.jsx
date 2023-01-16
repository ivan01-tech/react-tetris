import React from "react";
import { StartButtonWrap } from "../Buttons/Button.elements";

function StarButton({ callback, gameOver }) {
  return (
    <StartButtonWrap disabled={gameOver} onClick={() => callback()}>
      Start Game
    </StartButtonWrap>
  );
}

export default StarButton;
