'use client'

import { API_BASE_URL_WITH_PROTOCOL } from "../login/fetchData";
import { ApiRouteTokenLoginCookie } from "../login/page";
import { useAuth } from "./AuthContext";

export default function DevToolAutoLoginContext() {
    const { user, updateUser } = useAuth()

    useEffect(() => {
        const autoLogin = async (e) => {
            const credentials = {
                username: process.env.ADMIN_LOGIN,
                password: process.env.ADMIN_PASSWORD,
            };
            console.log(credentials)
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
                credentials: 'include',
            }
            try {
                const data = await fetch(`${API_BASE_URL_WITH_PROTOCOL}${ApiRouteTokenLoginCookie}`, options)
                if (response.ok) {
                    console.log("Auto login successful");
                } else {
                    console.error("Auto login failed", response.status);
                }
            } catch (error) {
                console.error("Auto login error:", error);
            }
            updateUser()
        }

        if (user === null) {
            autoLogin()
        }
    }, [user]);
        

}