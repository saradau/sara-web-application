import React from "react";
import styles from "./signup.module.css";

export default function SuccessPage() {
  return (
    <div className={styles.container}>
      <img
        src="/success_circles.svg"
        alt="Geometric Background"
        className={styles.pattern}
      />

      <main className={styles.main}>
        <h1 className="heading-1">you're in!</h1>
        <p className="body-text">We sent you an email to verify your account</p>
      </main>
    </div>
  );
}
