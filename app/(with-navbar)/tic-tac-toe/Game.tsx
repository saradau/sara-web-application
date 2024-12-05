"use client";

import React, { useState, useCallback, useEffect } from "react";
import Board from "@/app/tic-tac-toe/Board";
import styles from "@/app/tic-tac-toe/TicTacToe.module.css";
import { BoardState, calculateWinner } from "@/app/tic-tac-toe/Utils";

type WinnerCount = {
  X: number;
  O: number;
  Draw: number;
};

function Game() {
  const [history, setHistory] = useState<BoardState[]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [winnerCount, setWinnerCount] = useState<WinnerCount>({
    X: 0,
    O: 0,
    Draw: 0,
  });

  const xIsNext: boolean = currentMove % 2 === 0;
  const currentBoardState: BoardState = history[currentMove];

  const [status, setStatus] = useState<string>(
    "Next player: " + (xIsNext ? "X" : "O")
  );

  useEffect(() => {
    const winner = calculateWinner(currentBoardState);
    if (winner) {
      setWinnerCount((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
      setStatus(`Winner: ${winner}`);
    } else {
      setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    }
  }, [currentBoardState, xIsNext]);

  const restartGame = () => {
    setCurrentMove(0);
    setHistory([Array(9).fill(null)]);
  };

  const handlePlay = useCallback(
    (newBoardState: BoardState) => {
      const newHistory = history.slice(0, currentMove + 1);
      newHistory.push(newBoardState);

      setHistory(newHistory);
      setCurrentMove(newHistory.length - 1);
    },
    [currentMove, history]
  );

  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <Board
        xIsNext={xIsNext}
        boardState={currentBoardState}
        onPlay={handlePlay}
      />

      <button className={styles.restartButton} onClick={restartGame}>
        Restart Game
      </button>

      <div className={styles.squaresContainer}>
        <div className={styles.winnerCount}>
          <h4 className={styles.scoreTitle}>Score</h4>
          <div className={styles.scoresContainer}>
            <div
              className={styles.winnerCountItem}
              style={{ color: "#bf2d2d" }}
            >
              <span className={styles.winnerValue}>{winnerCount.X}</span>
              <span className={styles.winnerLabel}>X Wins</span>
            </div>
            <div className={styles.winnerCountItem} style={{ color: "blue" }}>
              <span className={styles.winnerValue}>{winnerCount.O}</span>
              <span className={styles.winnerLabel}>O Wins</span>
            </div>
            <div
              className={styles.winnerCountItem}
              style={{ color: "#4f4646" }}
            >
              <span className={styles.winnerValue}>{winnerCount.Draw}</span>
              <span className={styles.winnerLabel}>Draws</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
