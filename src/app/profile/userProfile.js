'use client'

import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";

export default function UserProfile() {
    const route = '/api/user/'
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function f() {
            const data = await fetchData(route, {})
            if (data != "Fetch Error" && data != "Fetch Failed. Response not ok") {
                setUser(data)
            }
        }
        f();
    }, []);

    return (
        <div>
            {!user?.id && 
                <div className="mt-2 mb-4"> 
                    Guest mode - no user information.
                </div>                
            }
            <div>User ID: {user.id}</div>
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Last login: {dayjs(user.last_login).fromNow()}</div>
            <div>Date joined: {dayjs(user.date_joined).fromNow()}</div>
            <div>API URL: {user.url}</div>
            <div>Groups: {user?.groups?.length !== 0 ? user.groups : 'n/a'}</div>
        </div>
    )
}