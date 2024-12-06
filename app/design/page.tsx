"use client";

import React from "react";
import styles from "./signup.module.css";
import { SignUpForm } from "@/app/design/components/signup-form";

export default function SignUpPage() {
  return (
    <div className={styles.container}>
      <img
        src="/pictures/signup_circles.svg"
        alt="Geometric Background"
        className={styles.decoration}
      />
      <main className={styles.main}>
        <div className={styles.textcontainer}>
          <h1 className="heading-1">Sign Up</h1>
          <h2 className="heading-2">and start painting</h2>
          <p className="body-text">
            Welcome to COLOR WHEEL - the platform that connects students with
            affordable, on-demand painting services. Sign up today to find a
            student painter and transform your space!
          </p>
        </div>

        <SignUpForm />
      </main>
    </div>
  );
}
