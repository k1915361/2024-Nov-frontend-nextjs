'use client'

import { fetchData } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"
import { useEffect, useState } from "react";

export default function FetchDatasetClient({
  id, params,
}) {
    const route = '/api/dataset/'
    const [data, setData] = useState();
    
    useEffect(() => {
        async function f() {
            const data = await fetchData(`${route}${id}`, {})
            if (data != "Fetch Error" && data != "Fetch Failed. Response not ok"){
                setData(data)
            }
        }
        f();
    }, []);


    return <div>
        <h4>
            {data?.name}
        </h4>
        <h5>Dataset README</h5>
        <div dangerouslySetInnerHTML={{ __html: data?.markdown }} />
        <div>
            Created: {data?.created}
        </div>
        <div>
            Updated: {data?.updated}
        </div>
        <div>
            Public: {data?.is_public === true ? 'Yes' : 'No'}
        </div>
        <div>
            Owner: {data?.username}
        </div>
        <div>
            Original_dataset: {data?.original_dataset === null ? 'n/a' : data?.original_dataset}
        </div>
    </div>
}