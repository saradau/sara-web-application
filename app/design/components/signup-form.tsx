"use client";

import React, { useState } from "react";
import styles from "./signup-form.module.css";

type Inputs = "email" | "password" | null;
type OnSubmitFunction = (email: string, password: string) => void;

interface SignUpFormProps {
  onSubmit: OnSubmitFunction;
  isLoading: boolean;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [currentFocus, setCurrentFocus] = useState<Inputs>(null);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ email?: boolean; password?: boolean }>(
    {}
  );

  const validateForm = () => {
    const newErrors: { email?: boolean; password?: boolean } = {};
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = true;
    } else {
      newErrors.email = false;
    }

    if (!password) {
      newErrors.password = true;
    } else {
      newErrors.password = false;
    }

    setErrors(newErrors);
    return !newErrors.password && !newErrors.email;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
            onInvalid={() => {
              setErrors({
                ...errors,
                email: true,
              });
            }}
            className={`${styles.input} ${errors.email ? styles.error : ""} 
            ${
              (!currentFocus || currentFocus !== "email") &&
              email &&
              !errors.email
                ? styles.focused
                : ""
            }`}
            placeholder="email"
            value={email}
            onFocus={() => setCurrentFocus("email")}
            onBlur={() => setCurrentFocus(null)}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="password"
            className={`${styles.input} ${
              errors.password ? styles.error : ""
            } ${
              (!currentFocus || currentFocus !== "password") &&
              password &&
              !errors.password
                ? styles.focused
                : ""
            }`}
            placeholder="password"
            onFocus={() => setCurrentFocus("password")}
            onBlur={() => setCurrentFocus(null)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>

        <p className={styles.signin}>
          Already have an account?{" "}
          <a href="#signin" className={styles.link}>
            sign in
          </a>
        </p>
      </div>

      <button
        type="submit"
        className={styles.signupButton}
        disabled={isLoading}
      >
        sign up!
      </button>
    </form>
  );
};
