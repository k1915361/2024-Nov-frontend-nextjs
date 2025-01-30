'use client'

import { fetchData } from "@/app/login/fetchData"
import { LinkButtonLight } from "@/app/user/models/page";
import { useEffect, useState } from "react";
import { DeleteModal, ModalDeleteButton, ResponseMessage, strToDateToLocaleStr } from "@/app/dataset/[id]/fetchDataClient";
import DownloadButtonClientSide from "@/app/dataset/[id]/downloadClientSide";
import { useAuth } from "@/app/context/AuthContext";
import { isEmptyObject } from "../fork/[id]/pageClient";
import { modelActionBaseRoute } from "../action/[id]/page";

export const modelTreeBaseRoute = 'model/tree/'

export default function FetchModelClient({id}) {
    const route = '/api/model/'
    const [data, setData] = useState();
    const { user } = useAuth();
    
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
        <div/>
        <LinkButtonLight addClassName=' active' href='' style={{ borderBottom: "3px solid black", }}>
            Model card
        </LinkButtonLight>
        <LinkButtonLight href={`/${modelTreeBaseRoute}${removeModelDirectoryBasePath(data?.model_directory || '')}`} >
            Files
        </LinkButtonLight>
        {!isEmptyObject(user) &&
            <>
                <LinkButtonLight href={`/${modelActionBaseRoute}${id}`} >
                    Actions
                </LinkButtonLight>
                <LinkButtonLight href={`/model/fork/${id}`}>
                    Fork
                </LinkButtonLight>
                <ModalDeleteButton>
                    Delete Model
                </ModalDeleteButton>
            </>
        }
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

export function removeModelDirectoryBasePath(path, source='asset/model/', target='') {
    return path.replace(source, target)
}