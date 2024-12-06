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
                src="/pictures/tictactoe.png"
                alt="TicTacToe Game"
                width={250}
                height={250}
              />
            </Link>
            <h4 className={styles.cardTitle}>TicTacToe Game</h4>
          </div>
          <div className={styles.card}>
            <Link href="/nasa">
              <Image
                src="/pictures/nasa.png"
                alt="NASA Exploration"
                width={250}
                height={250}
              />
            </Link>
            <h4 className={styles.cardTitle}>NASA Exploration</h4>
          </div>
          <div className={styles.card}>
            <Link href="/design">
              <Image
                src="/pictures/design.png"
                alt="Design Concepts"
                width={250}
                height={250}
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
