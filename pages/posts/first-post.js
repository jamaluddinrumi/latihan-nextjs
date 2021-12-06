import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>First Post</h1>
        <h2 className={styles.title}>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </h2>
      </main>
    </div>
  );
}
