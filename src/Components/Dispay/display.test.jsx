import Display from "./Display";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const startGame = jest.fn();

describe("display unique test suite", () => {
  beforeEach(function () {});
  it("should render the start , the level and the row buttons", function () {
    render(
      <Display
        rows={2}
        Level={2}
        score={2343}
        gameOver={false}
        startGame={startGame}
      />
    );

    const statBtn = screen.getByRole("button", { name: "Start Game" });

    const rowBtn = screen.getByText("Rows : 2");
    const levelBtn = screen.getByText("Level: 2");
    const scoreBtn = screen.getByText("Score : 2343");

    expect(rowBtn).toBeInTheDocument();
    expect(levelBtn).toBeInTheDocument();
    expect(scoreBtn).toBeInTheDocument();
    expect(statBtn).toBeInTheDocument();
  });

  it("should display the game over button", function () {
    render(
      <Display
        rows={2}
        Level={2}
        score={2343}
        startGame={startGame}
        gameOver={true}
      />
    );
    const gameOverBtn = screen.getByText("Game Over");
    expect(gameOverBtn).toBeInTheDocument();
  });
});
