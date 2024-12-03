import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";

export default function PageComponent({children}) {
  const blogPromise = fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  
  return (
    <div className={styles.page}>     
      <main className={styles.main}>
          {children}        
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
