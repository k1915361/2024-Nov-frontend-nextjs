'use client'

import { useState } from "react";
import PageComponent from "../page_component";
import { useUser } from '../context/UserContext';
import { fetchData } from "./fetchData";

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
            
            setUser({...user, username: data.username})
            setMessage(`Successfully logged in.`)
            
        } catch (err) {
            setMessage(err.message || "An error occurred")
        }

    }

    return (
        <PageComponent>
            {user.username && 
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