import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the code challenge!</h1>
      <p className={styles.desc}>Let's start the fun of coding.Click the button below to get started.</p>

      <button className={styles.button}>Start Challenge</button>
    </div>
  );
}
