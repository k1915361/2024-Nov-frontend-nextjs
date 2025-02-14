'use client'

import { API_ROOT } from "@/app/login/fetchData";
import { useEffect, useState } from "react";

export function fetchAndSetState(api, setState, fetchInit={}) {
    async function f() {
        const response = await fetch(api, fetchInit)
        if (!response.ok) {
            console.log('Response not ok', response);
            return 
        }
        setState(response)
    }
    f();
}

export default function ViewTextFileClientSide({apiRoute, apiRoot=API_ROOT, apiSeparator = '/', ...props }) {
    const [text, setText] = useState('')
    
    useEffect(() => {
        fetchAndSetState(
            `${apiRoot}${apiSeparator}${apiRoute}`, 
            async (response) => setText((await response.text()).replace('<pre>', ' ').replace('</pre>', '')),
            {credentials: 'include'}
        )
    }, [])    
    
    return (
        <pre {...props} style={{ textWrap: "wrap"}} >
            {text}
        </pre>
    )
}