'use client'

import { fetchData } from "@/app/login/fetchData"
import { ButtonLight } from "@/app/user/models/page";
import { useEffect, useState } from "react";

export function strToDateToLocaleStr(date) {
    return (new Date(date)).toLocaleString()
}

export const statusCodeMessageMap = {
    401: 'Unauthorized',
    404: 'Not Found',
}

export function ModalDeleteButton({name, children}) {
    return <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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

export default function FetchDatasetClient({id}) {
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

    async function requestDeleteDataset() {
        const options = {
            method: 'DELETE'
        }
        const response = await fetchData(`${route}${id}`, options)
        setData({...data, "deleteMessage": response?.message || response})
    }

    if (data?.success === false || data?.status === 401 || data?.status === 404) {
        return <div>
            <div>{statusCodeMessageMap[data?.status]}</div>
            <div>{data?.message}</div>
        </div>
    }

    return <div>
        <div>{JSON.stringify(data?.deleteMessage)}</div>
        <h1>
            Dataset: {data?.name}
        </h1>
        <h6>
            User: {data?.username}
        </h6>
        <ButtonLight>Dataset Analysis</ButtonLight>
        <ButtonLight>Cleaning</ButtonLight>            
        <ButtonLight>Cleaning</ButtonLight>
        <ButtonLight>Enrichment</ButtonLight>
        <ButtonLight>Data Curation</ButtonLight>
        <ButtonLight>Balancing</ButtonLight>
        <ButtonLight>XAI</ButtonLight>
        <div/>
        <ButtonLight>
            Download / Export
        </ButtonLight>
        <ModalDeleteButton>
            Delete Dataset            
        </ModalDeleteButton>
        <DeleteModal onDelete={requestDeleteDataset}/>
        <div dangerouslySetInnerHTML={{ __html: data?.markdown }} />
        <div>
            Created: {strToDateToLocaleStr(data?.created)}
        </div>
        <div>
            Updated: {strToDateToLocaleStr(data?.updated)}
        </div>
        <div>
            {data?.is_public !== null &&
                data?.is_public === true ? 'Public' : 'Private' 
            }
        </div>
        <div>
            {data?.original_dataset !== null &&
                `Original Dataset: ${data?.original_dataset}`
            }
        </div>
    </div>
}