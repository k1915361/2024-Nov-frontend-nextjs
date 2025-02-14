'use client'

import { API_ROOT } from "@/app/login/fetchData";
import { fetchAndSetState } from "../../blob/[id]/[...path]/viewTextFileClientSide";
import { useEffect, useState } from "react";
import CsvTableAndDownloadButton from "../../viewer/page";

export function directoryBaseToApiBaseUrl(path, apiBaseUrl=API_ROOT) {
    return path
        ?.replace('asset/user/', apiBaseUrl+'/')
        .replace('asset/', '')
}

export function CsvTableAndDownloadButtonComponent({directory}) {
    return (
        directory && 
            <CsvTableAndDownloadButton 
                apiAddress={`${API_ROOT}/${directoryBaseToApiBaseUrl(directory)}/.csv`}
            />
    )     
}

export default function DatasetCsvView({id}) { 
    const [data, setData] = useState();
    const route = `dataset/${id}`

    useEffect(() => {
        fetchAndSetState(
            `${API_ROOT}/${route}`, 
            async (response) => setData(await response.json()),
            {credentials: 'include'}
        )
    }, [])
    
    return (
        <div>
            <div>
                <CsvTableAndDownloadButtonComponent directory={data?.dataset_directory} />
            </div>
        </div>
    )
    
}