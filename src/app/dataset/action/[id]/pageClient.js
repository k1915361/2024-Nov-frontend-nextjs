'use client'

import { ProgressBarView } from "../task/websocket/actionProgressBarView"
import DatasetInfo from "./datasetInfo"
import { API_ROOT, fetchData, fetchData_ } from "@/app/login/fetchData"
import DatasetCsvView from "./datasetCsvView"
import { PleaseLoginMessage, Text2ndarySmall } from "@/app/_components/components"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"
import { useAuth } from "@/app/context/AuthContext"
import { DivActionResponseView } from "../DivActionResponseView"
import { apiRouteBaseActionProgressStatus } from "@/app/model/action/[id]/pageClient"

export async function fetchAccessToken() {
    const { data: data_, success } = await fetchData_(`/api/token/access/`)
    console.log({ data_, success })
    return { data_, success }
}

export function useResourceTaskData(id, taskId, route, resourceType) {
    const [data, setData] = useState({});
    const [taskId_, setTaskId] = useState(taskId);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [accessToken, setAccessToken] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        if (!taskId) {
            async function fetchTaskData() {
                const data_ = await fetchData(route, {});
                if (data_ && data_ != "Fetch Error" && data_ != "Fetch Failed. Response not ok") {
                    setData(data_);
                    setTaskId(data_.task_id);
                    setShouldRedirect(true);
                }
            }
            fetchTaskData()
        }
    }, []);

    useEffect(() => {
        async function fetchTokenAndRedirect() {
            const { data_: tokenData, success: tokenSuccess } = await fetchAccessToken();
            if (tokenSuccess) {
                setAccessToken(tokenData.access_token);
            }

        }
        
        fetchTokenAndRedirect();
    }, [taskId_]);
    
    useEffect(() => {        
        if (shouldRedirect) {
            redirect(`/${resourceType}/action/${id}/task/${data.task_id}`);
        }        
    }, [shouldRedirect]);

    return { data, taskId: taskId_, accessToken, user };
}

export default function PageClient({ id, taskId = '', task_name = '', isDataset = true, resourceType = 'dataset' }){
    const route = `/api/task/${task_name}`
    const { data, taskId: taskId_, accessToken, user } = useResourceTaskData(id, taskId, route, resourceType);

    if (!user?.username) {
        return <>
            <DatasetInfo id={id} />
            <PleaseLoginMessage />
        </>
    }

    const message_props = { 
        'id': id, 
        'task_id': taskId_, 
        'access_token': accessToken,
    }

    const apiRouteActionProgressBase = `/${resourceType}/image/action-progress`

    return (
        <>
            <DatasetInfo id={id}/>
            <DivActionResponseView
                buttonName={DATASET_ACTIONS.DATASET_ANALYSIS_NAME}
                apiRoute={`/dataset/${apiRouteBaseActionProgressStatus}-a`}
                type={DATASET_ACTIONS.DATASET_ANALYSIS}
                parameters={DATASET_ACTION_PARAMS.A}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName={DATASET_ACTIONS.CLEANING_NAME}
                apiRoute={apiRouteActionProgressBase}
                type={DATASET_ACTIONS.CLEANING}
                parameters={DATASET_ACTION_PARAMS.A}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName={DATASET_ACTIONS.ENRICHMENT_NAME}
                apiRoute={`${apiRouteActionProgressBase}-b`}
                type={DATASET_ACTIONS.ENRICHMENT}
                parameters={DATASET_ACTION_PARAMS.B}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName={DATASET_ACTIONS.DATA_CURATION_NAME}
                apiRoute={`${apiRouteActionProgressBase}-c`}
                type={DATASET_ACTIONS.DATA_CURATION}
                parameters={DATASET_ACTION_PARAMS.C}
                message_props={message_props}
            />
            <ProgressBarView 
                buttonName={DATASET_ACTIONS.DATA_BALANCING_NAME}
                apiRoute={`${apiRouteActionProgressBase}-d`}
                type={DATASET_ACTIONS.DATA_BALANCING}
                parameters={DATASET_ACTION_PARAMS.D}
                message_props={message_props}
            />
            <Text2ndarySmall>
                Explainable AI (XAI)
            </Text2ndarySmall>
            <div>
            </div>
            <ProgressBarView 
                buttonName={DATASET_ACTIONS.EXPLAINABLE_AI_NAME}
                apiRoute={`${apiRouteActionProgressBase}-e`}
                type={DATASET_ACTIONS.EXPLAINABLE_AI}
                parameters={DATASET_ACTION_PARAMS.E}
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

export const DATASET_ACTIONS = {
    DATASET_ANALYSIS_NAME: 'Dataset Analysis',
    DATASET_ANALYSIS: 'analysis',
    CLEANING_NAME: 'Cleaning',
    CLEANING: 'cleaning',
    ENRICHMENT_NAME: 'Enrichment',
    ENRICHMENT: 'enrichment',
    DATA_CURATION_NAME: 'Data Curation',
    DATA_CURATION: 'curation',
    EXPLAINABLE_AI_NAME: 'XAI',
    EXPLAINABLE_AI: 'explainable_ai',
    DATA_BALANCING_NAME: 'Data Balancing',
    DATA_BALANCING: 'balancing',
}

export const DATASET_ACTION_PARAMS = {    
    A: { 'paramA': 'cleaning_valueA' },
    B: { 'paramA': 'enrichment_valueB' },
    C: { 'paramA': 'data_curation_valueC' },
    D: { 'paramA': 'balancing_valueD' },
    E: { 'paramA': 'explainable_ai_valueE' },
}