'use client'

import { useState } from "react";
import PageComponent from "../page_component";
import { useUser } from '../context/UserContext';
import { log } from "../_components/model_form";
import { fetchData } from "./fetchData";
import { getCookie } from "./refreshToken";

export function get_expires_date_for_document_cookie(daysToExpire = 7) {    
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    return expires
}

export function set_document_cookie(key, token) {
    document.cookie = `${key}=${token}; ${get_expires_date_for_document_cookie()}; path=/; Secure; HttpOnly; SameSite=Strict`;
}

export default function Login() {
    const [message, setMessage] = useState("")
    const { user, setUser } = useUser();
    const route = '/api/token/'

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
            console.log('1')
            console.log(data)
            console.log(' 2document.cookie')
            console.log(document.cookie)

            if (data.access) {
                try {
                    set_document_cookie('access_token', data.access)
                } catch (error) {
                    log(`Failed to store access token to cookie. It is likely already stored. ${error}`)                    
                }

                try {
                    set_document_cookie('refresh_token', data.refresh)
                } catch (error) {
                    log(`Failed to store refresh token to cookie. It is likely already stored. ${error}`)                    
                }
                console.log(' 3document.cookie')
                console.log(document.cookie)
                setMessage("Successfully logged in.")
                
            }
        } catch (err) {
            setMessage(err.message || "An error occurred")
        }        
    }

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