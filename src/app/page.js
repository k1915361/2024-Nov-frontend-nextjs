import Image from "next/image";
import styles from "./page.module.css";
import SwitchThemeButton from "./_components/switch_theme_button";
import ListModelsTest from "./homepage/list_models_test";
import ListModels from "./homepage/list_models";
import ListDatasets from "./homepage/list_datasets";

export const viewport = {
  colorScheme: 'light',
}

const user_list_response = {
  response_message: "success",
  response_body: {
    user_list: [
      {
        id:1,
        username: 'ace'
      },
      {
        id:2,
        username: 'bob'
      },
      {
        id:3,
        username: 'admin'
      },
    ]
  }
}

const model_page_obj = {
  response_message: "success",
  response_body: {
    model: [
      {
        id: 1,
        name: 'model A',
        type: 'type A',
        user: user_list_response.response_body.user_list[0],
        updated: '2024-11-11 12:11'
      },
      {
        id: 2,
        name: 'model B',
        type: 'type B',
        user: user_list_response.response_body.user_list[1],
        updated: '2024-12-11 01:11'
      },
    ]
  }
}

export default function Home() {
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ListModels/>
        <ListDatasets/>
          <div className={styles.ctas}>
          
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`text-primary ${styles.secondary}`}
          >
            a Button
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
