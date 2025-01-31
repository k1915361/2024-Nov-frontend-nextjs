'use client'

import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { fetchResponse } from "../login/fetchData";
import PageComponent from "../pageComponent";
import { useAuth } from "../context/AuthContext";

export async function check_log_in_state(route = '/api/token/check-login/cookie/') {
    const options = {
        method: 'POST',
    }
    const response = await fetchResponse(route, options)
    if (!response.ok) {
        return "Failed to log out"
    }
    const data = response.json()
    
    return data.is_logged_in    
}

export default function Logout() {
    const { user, logOut, updateUser } = useAuth();
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function f() {
            await logOut()
            setShouldRedirect(true)
            const is_logged_in_ = await check_log_in_state()
            console.log("Is user logged in: ", is_logged_in_)
        }
        f()
    }, [])

    useEffect(() => {
        if (shouldRedirect) {
            router.push('/home/');
        }
    }, [shouldRedirect, router]); 

    return (
        <PageComponent>
        </PageComponent>
    )
}