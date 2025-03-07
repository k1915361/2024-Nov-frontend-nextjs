'use client'

import { useEffect, useState } from "react";
import PageComponent from "../pageComponent";
import { API_BASE_URL_WITH_PROTOCOL, API_ROOT, fetchData } from "./fetchData";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export async function checked_logged_in(route = '/api/login/check/') {
    const options = {
        method: 'GET',  
    }
    const data = await fetchData(route, options)
    return data
}

export function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue; 1
}

export function getCookieMatch() {
    return document.cookie.match(/csrftoken=([^;]+)/)?.[1];
}

export async function getCSRFToken() {
    try {
        const response = await fetch(
            `${API_BASE_URL_WITH_PROTOCOL}/api/token/csrf/`, 
            { 
                credentials: 'include',                 
            },            
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csrftoken = getCookie('csrftoken');
        if (!csrftoken) {
            throw new Error("CSRF token not found in cookie after initial request.");
        }
        return csrftoken;
    } catch (error) {
        console.log("Error getting CSRF token:", error);
        return null;
    }
}

export const ApiRouteTokenLoginCookie = '/api/token/login/cookie/'

export default function Login() {
    const router = useRouter()
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const { user, logOut, updateUser } = useAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const credentials = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        
        const csrftoken1 = document?.querySelector('[name=csrfmiddlewaretoken]')?.value;
        const csrftoken2 = getCookieMatch();
        const csrftoken3 = getCookie('csrftoken')
        
        try {
            const csrftoken = await getCSRFToken();
            const response = await fetch(
                `${API_ROOT}/token/csrf/test/`,
                {
                    credentials: 'include',
                },
            );
            if (!csrftoken) {
                console.log("Could not obtain CSRF token.");
            }            
            console.log(' csrftoken: ', csrftoken, csrftoken1, csrftoken2, csrftoken3);
            
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRFToken': csrftoken || csrftoken1 || csrftoken2 || csrftoken3,
                },
                body: JSON.stringify(credentials),
                credentials: 'include',
            }
            const data = await fetch(`${API_BASE_URL_WITH_PROTOCOL}${ApiRouteTokenLoginCookie}`, options)
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
                router.push('/home/');
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