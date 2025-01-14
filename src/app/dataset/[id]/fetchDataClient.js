'use client'

import { fetchData, fetchResponse } from "@/app/login/fetchData"
import { ButtonLight, LinkButtonLight } from "@/app/user/models/page";
import { useEffect, useState } from "react";
import DownloadButton from "./download";
import { LinkText, LinkTextNormal } from "@/app/home/page";
import { datasetTreeBaseRoute } from "../tree/text-view/[id]/[...path]/page";
import { datasetActionBaseRoute } from "../action/[id]/page";
import { Icon } from "@/app/_components/sidebar";
import Link from "next/link";

export function strToDateToLocaleStr(date) {
    return (new Date(date)).toLocaleString()
}

export const statusCodeMessageMap = {
    401: 'Unauthorized',
    404: 'Not Found',
}

export function ModalDeleteButton({name, children}) {
    return <button type="button" className="btn btn-danger mb-1 me-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
        {name}
        {children}
    </button>
}

export function DeleteModal({
    title, 
    children, 
    onDelete,
    confirmButtonName='Delete', 
    closeButtonName= 'Close',
    body="Deleting cannot be reversed. Confirm action:", 
}) {
    return (    
        <div className="modal" id="exampleModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>{body}</p>
                    {children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{closeButtonName}</button>
                    <button type="button" className="btn btn-danger" onClick={onDelete}>{confirmButtonName}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export function ResponseMessage({data}) {
    if (data?.success === false || data?.status === 401 || data?.status === 404) {        
        return (
            <div>
                <div>{data?.message} - {statusCodeMessageMap[data?.status]}</div>                
            </div>
        )
    }
}

export function removeDatasetDirectoryBasePath(path, source='asset/user/dataset/', target='') {
    return path.replace(source, target)
}

export function DatasetDetail({data}) {
    return (
        <>
            <div>Created: {data?.created &&
                    strToDateToLocaleStr(data?.created)
                }
            </div>
            <div>Updated: {data?.updated &&
                    strToDateToLocaleStr(data?.updated)
                }
            </div>
            <div>
                {data?.is_public !== null && data?.is_public !== undefined &&
                    (data?.is_public === true ? 'Public' : 'Private')
                }
            </div>
            <div>
                {data?.original_dataset &&
                    <LinkTextNormal id={data?.original_dataset} type='dataset'>
                        Original Dataset
                    </LinkTextNormal>
                }
            </div>
        </>
    )
}

export default function FetchDatasetClient({id}) {
    const route = '/api/dataset/'
    const [data, setData] = useState();    
    
    useEffect(() => {
        async function f() {
            const data = await fetchData(`${route}${id}`, {})
            setData(data)
        }
        f();
    }, []);

    async function requestDeleteDataset() {
        const response = await fetchData(`${route}${id}`, {}, 'DELETE')
        setData({...data, "deleteMessage": response?.message || response})
    }    

    return <div>
        <div>{data?.deleteMessage}</div>
        <ResponseMessage data={data} />
        <h1>
            Dataset: {data?.name}
        </h1>
        <h6>
            User: {data?.username}
        </h6>
        <LinkButtonLight addClassName=' active' href='' style={{ borderBottom: "3px solid black", }}>
            Dataset card
        </LinkButtonLight>

        <LinkButtonLight>
            <Icon bootstrapIcon='file-earmark-spreadsheet'/>
            Viewer
        </LinkButtonLight>
        <LinkButtonLight href={`/${datasetTreeBaseRoute}${removeDatasetDirectoryBasePath(data?.dataset_directory || '')}`} >
            Files
        </LinkButtonLight>
        <LinkButtonLight href={`/${datasetActionBaseRoute}${id}`} >
            Actions
        </LinkButtonLight>
        <div/>
        <ButtonLight>
            Download / Export
        </ButtonLight>
        <ModalDeleteButton>
            Delete Dataset
        </ModalDeleteButton>        
        <DownloadButton id={id}/>
        <DeleteModal onDelete={requestDeleteDataset}/>
        
        <div dangerouslySetInnerHTML={{ __html: data?.markdown }} />
        <DatasetDetail data={data}/>
    </div>
}