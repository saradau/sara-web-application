"use client";

import React from "react";
import styles from "./success.module.css";

export default function SuccessPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="heading-1">you&apos;re in!</h1>
        <p className="body-text">We sent you an email to verify your account</p>
      </main>
      <img
        src="/pictures/success_circles.svg"
        alt="Geometric Background"
        className={styles.decoration}
      />
    </div>
  );
}
