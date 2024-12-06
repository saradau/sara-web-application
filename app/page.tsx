import Footer from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainPageContainer}>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Sara Dauksz&apos;s Projects</h1>
          <h3 className={styles.subtitle}>
            Welcome to a collection of projects by Sara Dauksz.
          </h3>
        </div>
        <div className={styles.projectSection}>
          <div className={styles.card}>
            <Link href="/tic-tac-toe">
              <Image
                src="/tictactoe.png"
                alt="TicTacToe Game"
                width={300}
                height={200}
                className={styles.cardImage}
              />
            </Link>
            <h4 className={styles.cardTitle}>TicTacToe Game</h4>
          </div>
          <div className={styles.card}>
            <Link href="/nasa">
              <Image
                src="/nasa.png"
                alt="NASA Exploration"
                width={300}
                height={200}
                className={styles.cardImage}
              />
            </Link>
            <h4 className={styles.cardTitle}>NASA Exploration</h4>
          </div>
          <div className={styles.card}>
            <Link href="/design">
              <Image
                src="/design.png"
                alt="Design Concepts"
                width={300} //TODO: why need here too?
                height={200}
                className={styles.cardImage}
              />
            </Link>
            <h4 className={styles.cardTitle}>Design Concepts</h4>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
