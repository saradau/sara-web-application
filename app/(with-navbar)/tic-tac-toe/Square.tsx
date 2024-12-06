"use client";

import React from "react";
import styles from "@/app/(with-navbar)/tic-tac-toe/TicTacToe.module.css";
import { SquareValue } from "@/app/(with-navbar)/tic-tac-toe/Utils";

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  const squareColor = value ? (value === "X" ? "#bf2d2d" : "blue") : undefined;
  return (
    <button
      className={`${styles.square}`}
      style={{
        color: squareColor,
      }}
      onClick={onSquareClick}
      data-value={value}
    >
      {value}
    </button>
  );
}

export default Square;
