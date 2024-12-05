"use client";

import React, { useEffect, useState } from "react";
import styles from "./signup-form.module.css";

interface SignUpFormProps {
  onSubmit: (email: string, password: string) => void;
}

type Inputs = "email" | "password" | null;

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [currentFocus, setCurrentFocus] = useState<Inputs>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            className={`${styles.input} ${errors.email ? styles.error : ""} ${
              (!currentFocus || currentFocus !== "email") && email
                ? styles.focused
                : ""
            }`}
            placeholder="email"
            value={email}
            onFocus={() => setCurrentFocus("email")}
            onBlur={() => setCurrentFocus(null)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            className={`${styles.input} ${
              errors.password ? styles.error : ""
            } ${
              (!currentFocus || currentFocus !== "password") && password
                ? styles.focused
                : ""
            }`}
            placeholder="password"
            onFocus={() => setCurrentFocus("password")}
            onBlur={() => setCurrentFocus(null)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className={styles.signin}>
          Already have an account?{" "}
          <a href="/signin" className={styles.link}>
            sign in
          </a>
        </p>
      </div>

      <button type="submit" className={styles.signupButton}>
        sign up!
      </button>
    </form>
  );
};
