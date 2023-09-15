import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input id="specificText" />
      </div>
      <div>
        <input id="specificText" placeholder="Search..." />
      </div>
    </main>
  );
}
