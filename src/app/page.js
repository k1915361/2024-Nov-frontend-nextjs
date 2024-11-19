import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/globe.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/window.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            A
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            B
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          T&C
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Home
        </a>
      </footer>
    </div>
  );
}
