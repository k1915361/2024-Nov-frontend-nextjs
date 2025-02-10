'use client'

import { useEffect, useState } from "react";
import PageComponent from "../pageComponent";
import { fetchData } from "./fetchData";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export async function checked_logged_in(route = '/api/login/check/') {
    const options = {
        method: 'GET',  
    }
    const data = await fetchData(route, options)
    return data
}

export default function Login() {
    const router = useRouter()
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")    
    const route = '/api/token/login/cookie/'
    const { user, logOut, updateUser } = useAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const credentials = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
            credentials: 'include',
        }
        try {
            const data = await fetchData(route, options)            
            setUsername(data.username)
        } catch (err) {
            setMessage(err.message || "An error occurred")
        }

        updateUser()
    }

    useEffect(() => {
        async function f() {
            const data = await checked_logged_in()
            
            if (data?.status === 401) {
                setUsername('')
            }
            if (data?.username 
                && data?.detail == "You are logged in." 
                && data?.user_is_authenticated == true
            ) {
                setUsername(data.username)
                router.back()
            }
        }
        f()
    }, [username])

    return (
        <PageComponent>
            {username && 
                <div>You are logged in as: {username}</div>
            }
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className='form-control mb-1'
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className='form-control mb-1'
                    required
                />                
                
                <button 
                    type="submit"
                    className='btn btn-primary'
                >
                    Login
                </button>
                <div>
                    {message}
                </div>
            </form>    
        </PageComponent>
    )
}