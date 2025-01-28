'use client'

import { useEffect, useState } from "react";
import { CsvTableAndDownloadButtonComponent } from "./datasetCsvView";
import { fetchAndSetState } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import { DatasetInfoComponent } from "./datasetInfo";
import { API_HTTP } from "@/app/login/fetchData";

export default function DatasetInfoAndCsvView({id}) { 
    const [data, setData] = useState();
    const route = `dataset/${id}`

    useEffect(() => {
        fetchAndSetState(
            `${API_HTTP}/${route}`, 
            async (response) => setData(await response.json()),
            {credentials: 'include'}
        )
    }, [])
    
    return (
        <>
            <div>
                <DatasetInfoComponent data={data}/>
            </div>
            <div>
                <div>
                    <CsvTableAndDownloadButtonComponent directory={data?.dataset_directory} />
                </div>
            </div>
        </>
    )

}