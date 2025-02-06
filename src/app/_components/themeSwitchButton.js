'use client'

import { ButtonLight } from "./components";

const THEME_KEY = 'theme';

const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
};

const setTheme = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
};

export default function ThemeSwitchButton() {
    const toggleTheme = () => {
        setTheme(!getPreferredTheme());
    };

    return (
        <ButtonLight onClick={toggleTheme}>
            Toggle Theme
        </ButtonLight>
    );
}
