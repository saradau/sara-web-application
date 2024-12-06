"use client";

import React, { useState } from "react";
import styles from "./signup.module.css";
import { SignUpForm } from "@/app/design/components/signup-form";
import { supabase } from "@/app/design/supabaseClient";
import { usePathname, useRouter } from "next/navigation";

export default function SignUpPage() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSignUp = async (email: string, password: string) => {
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      } else {
        router.push(pathname + "/success");
      }
    } catch (error) {
      router.push(pathname + "/error");
    } finally {
      setLoading(false);
    }
  };

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

        <SignUpForm onSubmit={handleSignUp} isLoading={loading} />
      </main>
    </div>
  );
}
