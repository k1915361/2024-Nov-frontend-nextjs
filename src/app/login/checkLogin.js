'use client'

import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";

export default function CheckLogin({children}) {
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
            {user?.id && user?.username 
            ? <></>
            : 
            <>
                Please <a href='/login'>login</a> to use this page.
            </>
            }
            {children}
        </div>
    )
}