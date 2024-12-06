"use client";

import React from "react";
import styles from "./error.module.css";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/design");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.textcontainer}>
          <h1 className="heading-1">oops...</h1>
          <p className="body-text">
            something went wrong, try again with different email or password.
          </p>
        </div>
        <button
          onClick={handleBackToHome}
          className={`button ${styles.homeButton}`}
        >
          take me home
        </button>
      </main>
      <img
        src="/error_circles.svg"
        alt="Geometric Background"
        className={styles.decoration}
      />
    </div>
  );
}
