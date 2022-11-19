export const CELLS_PER_LIGN = 12;
export const CELLS_PER_COLUNM = 20;

export const createStage = () =>
  Array.from(Array(CELLS_PER_COLUNM), () =>
    new Array(CELLS_PER_LIGN).fill([0, "clear"])
  );

export const checkCollisions = (stage, player, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tectromino.length; y++) {
    for (let x = 0; x < player.tectromino[0].length; x++) {
      // check if the actual cell is the tectromino
      if (player.tectromino[y][x] !== 0) {
        if (
          // we should'nt go throught the height of the stage
          !stage[y + player.position.y + moveY] ||
          // we should'nt go throught the width of the stage
          !stage[y + player.position.y + moveY][
            moveX + player.position.x + x
          ] ||
          stage[y + player.position.y + moveY][
            moveX + player.position.x + x
          ][1] !== "clear"
          // we should make sure that the actual cell is'nt "clear"
        ) {
          return true;
        }
      }
    }
  }
};
