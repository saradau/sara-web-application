"use client";

import React from "react";
import styles from "@/app/tic-tac-toe/TicTacToe.module.css";
import { SquareValue } from "@/app/tic-tac-toe/Utils";

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className={styles.square}
      onClick={onSquareClick}
      data-value={value}
    >
      {value}
    </button>
  );
}

export default Square;
