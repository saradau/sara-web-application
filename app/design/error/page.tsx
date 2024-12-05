"use client";

import React from "react";
import styles from "./error.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="heading-1">oops...</h1>
        <p className="body-text">
          something went wrong, try again with different email or password.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className={`button ${styles.homeButton}`}
        >
          take me home
        </button>
        <img
          src="/error_circles.svg"
          alt="Geometric Background"
          className={styles.pattern}
        />
      </main>
    </div>
  );
}
