'use client'

import { fetchAndSetState } from "@/app/dataset/blob/[id]/[...path]/viewTextFileClientSide";
import { ModelInfoComponent } from "../../fork/[id]/pageClient";
import { API_ROOT } from "@/app/login/fetchData";
import { useEffect, useState } from "react";

export default function ModelInfo({ id }) {
    const [data, setData] = useState();
    const route = `model/${id}`
    const url = `${API_ROOT}/${route}`

    useEffect(() => {
        fetchAndSetState(
            url,
            async (response) => setData(await response.json()),
            { credentials: 'include' }
        )
    }, [])

    return (
        <div>
            <ModelInfoComponent data={data} />
        </div>
    )

}