'use client'

import { fetchData } from "@/app/login/fetchData"
import { ButtonLight } from "@/app/user/models/page";
import { useEffect, useState } from "react";
import { DeleteModal, ModalDeleteButton, ResponseMessage, strToDateToLocaleStr } from "@/app/dataset/[id]/fetchDataClient";
import DownloadButtonClientSide from "@/app/dataset/[id]/downloadClientSide";

export default function FetchModelClient({id}) {
    const route = '/api/model/'
    const [data, setData] = useState();    
    
    useEffect(() => {
        async function f() {
            const data = await fetchData(`${route}${id}`, {})
            setData(data)            
        }
        f();
    }, []);

    async function requestDeleteModel() {
        const response = await fetchData(`${route}${id}`, {}, 'DELETE')
        setData({...data, "deleteMessage": response?.message || response})
    }    

    return <div>
        <div>{data?.deleteMessage}</div>
        <ResponseMessage data={data} />
        <h1>
            Model: {data?.name}
        </h1>
        <h6>
            User: {data?.username}
        </h6>
        <ButtonLight>Model Analysis</ButtonLight>
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
            Delete Model
        </ModalDeleteButton>        
        <DownloadButtonClientSide id={id} route="/api/model/download/"/>
        <DeleteModal onDelete={requestDeleteModel}/>
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
            {data?.original_model &&
                `Original Model: ${data?.original_model}`
            }
        </div>
    </div>
}