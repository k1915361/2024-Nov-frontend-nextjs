import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import { LinkDark } from "./_components/components";

export default function PageComponent({children}) {
 
  return (
    <div className={styles.page_full}>     
      <main className={`${styles.full_width_main} container`}>
          {children}
      </main>
      <footer className={`${styles.footer} container-fluid border-top p-4`} >
        <LinkDark
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
        </LinkDark>
        <LinkDark
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
        </LinkDark>
        <LinkDark
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
        </LinkDark>
      </footer>
    </div>
  );
}
