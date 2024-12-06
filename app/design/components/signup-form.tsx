"use client";

import React, { useState } from "react";
import styles from "./signup-form.module.css";
import { supabase } from "@/app/design/supabaseClient";
import { useRouter } from "next/navigation";

type Inputs = "email" | "password" | null;
type OnSubmitFunction = (email: string, password: string) => void;

interface SignUpFormProps {
  onSubmit: OnSubmitFunction;
}

export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [currentFocus, setCurrentFocus] = useState<Inputs>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: boolean; password?: boolean }>(
    {}
  );
  const [loading, setLoading] = useState(false); //TODO: do not need these?
  // const [message, setMessage] = useState("");
  const router = useRouter();

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
    return !newErrors.password && !newErrors.email; //TODO: not keys?
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // setMessage("");

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        router.push("/error");
      } else {
        router.push("/success");
      }
    } catch (error) {
      //TODO: need catch?
      router.push("/error");
    } finally {
      setLoading(false);
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
            className={`${styles.input} ${errors.email ? styles.error : ""} ${
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
