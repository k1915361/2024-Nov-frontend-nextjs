'use client'

import { useEffect, useState } from "react";
import PageComponent from "../pageComponent";
import { fetchData } from "../login/fetchData";
import { redirect } from "next/navigation";

export const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
}

export default function Login() {
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const route = '/api/signup/'
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const credentials = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const options = {
            ...postOptions,
            body: JSON.stringify(credentials),
        }
        
        try {
            const data = await fetchData(route, options)
            console.log(JSON.stringify(data), data?.success?1:0);
            
            if (data.success === true) {
                setSuccess(true)
                setMessage(`You are logged in as ${credentials.username} - ${credentials.email}.`)
            }
            if (data.success === false) {
                setSuccess(false)
                setMessage(data.message)
            }
        } catch (err) {
            setMessage(err.message || "An error occurred")
            console.log(err.message, credentials.email, credentials.username, ' . ');
        }
    }

    useEffect(() => {  
        if (success) {
            redirect('/login/'); 
        }
    }, [success]); 

    return (
        <PageComponent>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className='form-control mb-1'
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    Sign Up
                </button>
                <div>
                    {message}
                </div>
            </form>    
        </PageComponent>
    )
}