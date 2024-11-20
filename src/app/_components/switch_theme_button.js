'use client'

import { useEffect, useState } from 'react';
import styles from "../page.module.css";

export default function SwitchThemeButton() {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState(); 

    const toggleTheme = () => {
        const root = document.documentElement;
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <>
            <div className={styles.ctas}  >
                <button 
                    onClick={toggleTheme} 
                    className={`btn btn-${theme} ${styles.primary}`}
                >
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button>
                
            </div>
        </>
    );
}
