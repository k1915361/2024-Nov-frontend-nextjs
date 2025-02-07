'use client'

import { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { fetchData, sendJsonFetchResponse } from "../login/fetchData";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const route = '/api/user/';

    const fetchUserData = useCallback( async () => {
        const data = await fetchData(route, {});
        if (data !== "Fetch Error" && data !== "Fetch Failed. Response not ok") {
            setUser(data);
        } else {
            setUser(null);
        }
    }, [route]);
    
    useEffect(() => {
        fetchUserData();
    }, [fetchUserData]);

    const logOut = useCallback ( async (route = '/api/token/logout/cookie/') => {
        const options = {
            method: 'POST',
        }
        try {
            const response = await sendJsonFetchResponse(route, options)
            if (!response.ok) {
                try {
                    const errorData = await response.json();
                    console.error("Logout status:", errorData.detail, `HTTP error ${response.status}`);
                } catch (jsonError) {
                    console.error("During Logout: ", `JSON Parsing Error: ${jsonError}`);
                }
            } else {
                setUser(null)
                const data = response.json()
                if (data?.is_logged_in === false) {
                    console.log("Logout successful")
                    setUser(null); 
                }
            }
        } catch (error) {
            console.error("Logout failed with network error:", error);
        }
    }, []);

    const updateUser = useCallback(async () => {
        await fetchUserData();
    }, [fetchUserData]);

    const value = { user, setUser, logOut, updateUser };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);