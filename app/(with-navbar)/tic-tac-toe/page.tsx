import Game from "@/app/(with-navbar)/tic-tac-toe/Game";
import styles from "@/app/(with-navbar)/tic-tac-toe/TicTacToe.module.css";

export default function TicTacToePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.gameContainer}>
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
    </div>
  );
}
