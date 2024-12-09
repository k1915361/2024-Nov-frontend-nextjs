'use client'

import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";
import { Icon } from "../_components/sidebar";

export default function LoginOrNot() {
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
            {!(user?.id) &&
                <a href="login/" className="px-1 mx-1 link-dark link-offset-2 link-underline-opacity-0">                    
                    <Icon bootstrapIcon='door-open'/>
                    Log In
                </a>
            }
        </div>
    )
}