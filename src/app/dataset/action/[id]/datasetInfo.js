'use client'

import { API_HTTP } from "@/app/login/fetchData";
import { useEffectFetchAndSetState } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import { useState } from "react";

export default function DatasetInfo({id}) { 
    const [data, setData] = useState();
    const route = `dataset/${id}`

    useEffectFetchAndSetState(route, async (response) => setData(await response.json()), API_HTTP)

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