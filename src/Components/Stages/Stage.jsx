import React from "react";
import { StageWrapper } from "./stage.elements";
import Cell from "../Cells/Cell";

function Stage({ stage }) {
  console.log("re-render1");

  return (
    <StageWrapper width={stage[0]?.length} height={stage?.length}>
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StageWrapper>
  );
}

export default Stage;
