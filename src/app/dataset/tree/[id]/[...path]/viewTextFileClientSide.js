'use client'

import { API_DATASET_ROOT } from "@/app/login/fetchData";
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

export function useEffectFetchAndSetState(apiRoute, setText, apiRoot=API_DATASET_ROOT, apiSeparator = '/', fetchAndSetState_=fetchAndSetState) {
    useEffect(() => {
        fetchAndSetState_(
            `${apiRoot}${apiSeparator}${apiRoute}`, 
            setText
        )
    }, [])
}

export default function ViewTextFileClientSide({apiRoute, apiRoot=API_DATASET_ROOT, apiSeparator = '/', ...props }) {
    const [text, setText] = useState('')
    
    useEffectFetchAndSetState(
        apiRoute, 
        async (response) => setText((await response.text()).replace('<pre>', ' ').replace('</pre>', '')),
        apiRoot=apiRoot,
        apiSeparator=apiSeparator
    )
    
    return (
        <pre {...props} style={{ textWrap: "wrap"}} >
            {text}
        </pre>
    )
}