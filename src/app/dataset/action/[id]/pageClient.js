'use client'

import { ProgressBarView } from "../../image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { DivActionResponseView } from "../../image/test-async-web-socket-json/action-buttons/page"
import DatasetInfo from "./datasetInfo"
import { API_HTTP, fetchData } from "@/app/login/fetchData"
import DatasetCsvView from "./datasetCsvView"
import { Text2ndarySmall } from "@/app/_components/components"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"

export default function PageClient({ id, taskId='', task_name='' }){
    const [data, setData] = useState({})
    const [taskId_, setTaskId] = useState(taskId)
    const route = `/api/task/${task_name}`
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (!taskId) {
            async function f() {
                const data_ = await fetchData(route, {})
                if (data_ && data_ != "Fetch Error" && data_ != "Fetch Failed. Response not ok") {
                    setData(data_)
                    setTaskId(data_.task_id)
                    setShouldRedirect(true)
                }
            }
            f();
        }
    }, []);
    
    useEffect(() => {
        if (shouldRedirect) {
            redirect(`/dataset/action/${id}/task/${data.task_id}`)
        }
    }, [shouldRedirect, data, taskId_]);

    return (
      <>
        <DatasetInfo id={id}/>
            <DivActionResponseView
                buttonName='Dataset Analysis'
                apiRoute='/dataset/image/test-async-file-stream-json/action-a'
                type='analysis'
                parameters={{ 'paramA': 'cleaning_valueA' }}
                message_props={{ 'id': id, 'task_id': taskId_ }}
            />
            <ProgressBarView 
                buttonName="Cleaning"
                apiRoute="/dataset/image/action-progress"
                type='cleaning'
                parameters={{ 'paramA': 'cleaning_valueA' }}
                message_props={{ 'id': id, 'task_id': taskId_ }}
            />
            <ProgressBarView 
                buttonName="Enrichment" 
                apiRoute="/dataset/image/action-progress-action-b"
                type='enrichment'
                parameters={{ 'paramA': 'enrichment_valueB' }}
                message_props={{ 'id': id, 'task_id': taskId_ }}
            />
            <ProgressBarView 
                buttonName="Data Curation" 
                apiRoute="/dataset/image/action-progress-action-c"
                type='curation'
                parameters={{ 'paramA': 'data_curation_valueC' }}
                message_props={{ 'id': id, 'task_id': taskId_ }}
            />
            <ProgressBarView 
                buttonName="Data Balancing" 
                apiRoute="/dataset/image/action-progress-action-d"
                type='balancing'
                parameters={{ 'paramA': 'balancing_valueD' }}
                message_props={{ 'id': id, 'task_id': taskId_ }}
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
                parameters={{ 'id': id, 'task_id': taskId_, 'paramA': 'explainable_ai_valueD' }}
                dataset_id={id}
            />
            <div>
                <a href={`${API_HTTP}/dataset/1-20241107_192036-CS_dataset/.csv`} download="data.csv">
                    Download CSV File
                </a>
            </div>
            <DatasetCsvView id={id}/>
        </>
    )
}
