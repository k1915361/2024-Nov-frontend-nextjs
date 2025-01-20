'use client'

import { API_HTTP } from "@/app/login/fetchData";
import { fetchAndSetState } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import { useEffect, useState } from "react";
import CsvTableAndDownloadButton from "../../viewer/page";

export function directoryBaseToApiBaseUrl(path, apiBaseUrl=API_HTTP) {
    return path?.replace('asset/user/', apiBaseUrl+'/').replace('', '')
}

export function TextLighter({children, ...props}) {
    return <div className="fw-lighter" {...props}>
        {children}
    </div>
}

export default function DatasetCsvView({id}) { 
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
            <TextLighter>
                (Showing maximum of 50 rows of CSV file.)
            </TextLighter>
            <div>
                {data?.dataset_directory && 
                    <CsvTableAndDownloadButton 
                        apiAddress={`${directoryBaseToApiBaseUrl(data?.dataset_directory)}/.csv`}
                    />
                }
            </div>
        </div>
    )
    
}