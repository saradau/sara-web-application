import React from "react";
import styles from "@/app/(with-navbar)/tic-tac-toe/TicTacToe.module.css";
import Square from "@/app/(with-navbar)/tic-tac-toe/Square";
import {
  BoardState,
  calculateWinner,
} from "@/app/(with-navbar)/tic-tac-toe/Utils";

interface BoardProps {
  xIsNext: boolean;
  boardState: BoardState;
  onPlay: (updatedBoardState: BoardState) => void;
}

function Board({ xIsNext, boardState, onPlay }: BoardProps) {
  function handleClick(i: number) {
    const winner = calculateWinner(boardState);
    if (winner || boardState[i]) {
      return;
    }

    const newBoardState = boardState.slice();
    newBoardState[i] = xIsNext ? "X" : "O";
    onPlay(newBoardState);
  }

  const size = 3;
  const rows = Array.from({ length: size }, (_, k) => (
    <div key={`row-${k}`} className={styles.boardRow}>
      {boardState.slice(k * size, (k + 1) * size).map((square, i) => (
        <Square
          key={i + k * size}
          value={square}
          onSquareClick={() => handleClick(i + k * size)}
        />
      ))}
    </div>
  ));

  return <div>{rows}</div>;
}

export default Board;
