'use client'

import { useEffect, useState } from "react";
import PageComponent from "../page_component";
import { useUser } from '../context/UserContext';
import { fetchData } from "./fetchData";

export async function checked_logged_in(route = '/api/login/check/') {
    const options = {
        method: 'GET',  
    }
    const data = await fetchData(route, options)
    return data
}

export default function Login() {
    const [message, setMessage] = useState("")
    const { user, setUser } = useUser();
    const route = '/api/token/login/cookie/'

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
        }

        try {
            const data = await fetchData(route, options)
            
            setUser({
                ...user, 
                username: data.username
            })
            setMessage(`Successfully logged in.`)
            
        } catch (err) {
            setMessage(err.message || "An error occurred")
        }

    }

    useEffect(() => {
        async function f() {
            const data = await checked_logged_in()
            
            if (data?.status === 401) {
                setUser({...user, username: ''})                
                setMessage(`${data?.statusText}: Please login again - your login has expired.`)
            }
            if (data?.username 
                && data?.detail == "You are logged in." 
                && data?.user_is_authenticated == true
            ) {
                setUser({...user, username: data.username})
            }
        }
        f()
    }, [])

    return (
        <PageComponent>
            {user?.username && 
                <div>You are logged in as: {user.username}</div>
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