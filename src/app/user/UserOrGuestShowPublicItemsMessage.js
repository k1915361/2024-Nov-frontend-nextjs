'use client'

import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";

export const textSecondary = "text-body-secondary"

export default function UserOrGuestShowPublic({children, ...props}) {
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
        <>
            {!(user?.id) && 
                <span className="text-body-secondary fs-" {...props}>Guest mode - showing public
                    {children}
                </span>
            }
        </>
    )
}