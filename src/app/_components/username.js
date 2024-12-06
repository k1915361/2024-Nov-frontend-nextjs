'use client'

import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";

export default function Username() {
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
            {(user?.id) ? 
                <div>{user.username}</div>
            :
                <div>Guest</div>            
            }
        </div>
    )
}