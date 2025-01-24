"use client"
import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
     const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form (basic example)
    if (!name || !email) {
      alert("All fields are required!");
      return;
    }

    // Save user data
    setUser({ name, email });
  };
        


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <button type="submit" className={styles.button}>
        Signup
      </button>
    </form>
  );
}
   

function setUser(arg0: { name: string; email: string; }) {
    throw new Error("Function not implemented.");
}
