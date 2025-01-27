'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const userObjFormat = { username: '', email: '', token: '', is_authenticated: false }
export const guestUserObj = { username: '', email: '', token: '', is_authenticated: false }

/** @deprecated */
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
