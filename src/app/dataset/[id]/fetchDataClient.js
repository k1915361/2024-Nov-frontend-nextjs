'use client'

import { fetchData } from "@/app/login/fetchData"
import { ButtonLight } from "@/app/user/models/page";
import { useEffect, useState } from "react";
import DownloadButton from "./download";

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
        <DownloadButton id={id}/>
        <DeleteModal onDelete={requestDeleteDataset}/>
        <div dangerouslySetInnerHTML={{ __html: data?.markdown }} />
        <div>Created: {data?.created &&
                strToDateToLocaleStr(data?.created)
            }
        </div>
        <div>Updated: {data?.updated &&
                strToDateToLocaleStr(data?.updated)
            }
        </div>
        <div>
            {data?.is_public &&
                (data?.is_public === true ? 'Public' : 'Private')
            }
        </div>
        <div>
            {data?.original_dataset &&
                `Original Dataset: ${data?.original_dataset}`
            }
        </div>
    </div>
}