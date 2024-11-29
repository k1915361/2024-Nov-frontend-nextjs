'use client'

import { API_ROOT } from "@/app/homepage/list_models";
import PageComponent from "../../page_component";
import { fetchData } from "../fetchData";
import { log } from "@/app/_components/model_form";
import { useState } from "react";

export async function refreshToken() {    
    const route = '/api/token/refresh/cookie/'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    
    const data = await fetchData(route, options)
    return data
}

export default async function TestRefreshToken({  }) {
    const [message, setMessage] = useState("")
    
    const data = await refreshToken()
    console.log(data)
    setMessage(data)

    return (
        <PageComponent>
            {JSON.stringify(data)}
            <div>Test refresh token</div>
        </PageComponent>
    )
}