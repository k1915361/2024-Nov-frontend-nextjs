'use client'

import { API_HTTP, fetchResponse } from "@/app/login/fetchData";
import { fetchAndSetState } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import { useEffect, useState } from "react";

export default function DatasetInfo({id}) { 
    const [data, setData] = useState();
    const route = `dataset/${id}`    

    useEffect(() => {
        fetchAndSetState(
            `${API_HTTP}/${route}`, 
            async (response) => setData(await response.json())
        )
    }, [])
    
    return (
        <div>
            <h1>
                Dataset: {data?.name}
            </h1>
            <h6>
                User: {data?.username}
            </h6>
            <div>
                Directory: {data?.dataset_directory}
            </div>
        </div>
    )
    
}