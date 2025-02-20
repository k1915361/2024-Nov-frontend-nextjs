'use client'

import { ProgressBarView } from "../task/websocket/actionProgressBarView"
import { DivActionResponseView } from "../test/websocket/page"
import DatasetInfo from "./datasetInfo"
import { API_ROOT, fetchData, fetchData_ } from "@/app/login/fetchData"
import DatasetCsvView from "./datasetCsvView"
import { PleaseLoginMessage, Text2ndarySmall } from "@/app/_components/components"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { useAuth } from "@/app/context/AuthContext"

export default function PageClient({ id, taskId = '', task_name = '', isDataset = true }){
    const [data, setData] = useState({})
    const [taskId_, setTaskId] = useState(taskId)
    const route = `/api/task/${task_name}`
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [accessToken, setAccessToken] = useState('')
    const { user } = useAuth()

    useEffect(() => {
        if (!taskId) {
            async function fetchTaskData() {
                const data_ = await fetchData(route, {})
                if (data_ && data_ != "Fetch Error" && data_ != "Fetch Failed. Response not ok") {
                    setData(data_)
                    setTaskId(data_.task_id)
                    setShouldRedirect(true)
                }
            }
            fetchTaskData();
        }        
    }, []);

    useEffect(() => {
        

        async function fetchAccessToken() {
            const { data: data_, success } = await fetchData_(`/api/token/access/`)
            if (success === true) {
                setAccessToken(data_.access_token)
            }
        }
        fetchAccessToken();
    }, [taskId_]);

    useEffect(() => {
        if (shouldRedirect) {
            redirect(`/dataset/action/${id}/task/${data.task_id}`)
        }
    }, [shouldRedirect, data, taskId_]);

    if (!user?.username) {
        return <>
            <DatasetInfo id={id} />
            <PleaseLoginMessage />
        </>
    }

    const message_props = { 
        'id': id, 
        'task_id': taskId_, 
        'access_token': accessToken 
    }

    return (
        <>
            <DatasetInfo id={id}/>
            <DivActionResponseView
                buttonName='Dataset Analysis'
                apiRoute='/dataset/image/test-async-file-stream-json/action-a'
                type='analysis'
                parameters={{ 'paramA': 'cleaning_valueA' }}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName="Cleaning"
                apiRoute="/dataset/image/action-progress"
                type='cleaning'
                parameters={{ 'paramA': 'cleaning_valueA' }}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName="Enrichment" 
                apiRoute="/dataset/image/action-progress-action-b"
                type='enrichment'
                parameters={{ 'paramA': 'enrichment_valueB' }}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName="Data Curation" 
                apiRoute="/dataset/image/action-progress-action-c"
                type='curation'
                parameters={{ 'paramA': 'data_curation_valueC' }}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName="Data Balancing" 
                apiRoute="/dataset/image/action-progress-action-d"
                type='balancing'
                parameters={{ 'paramA': 'balancing_valueD' }}
                message_props={message_props}
            />
            <Text2ndarySmall>
                Explainable AI (XAI)
            </Text2ndarySmall>
            <div>
            </div>
            <ProgressBarView 
                buttonName="XAI" 
                apiRoute="/dataset/image/action-progress-action-e"
                type='explainable_ai'
                parameters={{ 'paramA': 'explainable_ai_valueD' }}
                message_props={message_props}
                dataset_id={id}
            />
            {isDataset &&
                <>
                    <div>
                        <a href={`${API_ROOT}/dataset/1-20241107_192036-CS_dataset/.csv`} download="data.csv">
                            Download CSV File
                        </a>
                    </div>
                    <DatasetCsvView id={id}/>
                </>
            }
        </>
    )
}
