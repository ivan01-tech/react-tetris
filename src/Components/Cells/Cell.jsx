import React from "react";
import { TECTROMINOS } from "../../Utils/Tetrominos";
import { CellWrap } from "./cells.elements";

function Cell({ type }) {
  return <CellWrap type={type} color={TECTROMINOS[type].color} />;
}

export default React.memo(Cell);
