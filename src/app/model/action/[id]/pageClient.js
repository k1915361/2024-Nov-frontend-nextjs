'use client'

import { ProgressBarView } from "@/app/dataset/action/task/websocket/actionProgressBarView";
import ModelInfo from "./modelInfo";
import { useEffect, useState } from "react";
import { fetchData_ } from "@/app/login/fetchData";
import { useAuth } from "@/app/context/AuthContext";
import { PleaseLoginMessage } from "@/app/_components/components";
import { DivActionResponseView } from "@/app/dataset/action/DivActionResponseView";

export default function PageClient({ id, taskId = '', task_name = '', isDataset = true, resourceType = 'model' }) {
    const [accessToken, setAccessToken] = useState('')
    const [taskId_, setTaskId] = useState(taskId)
    const { user } = useAuth()
    
    useEffect(() => {
        
        async function f() {
            const { data: data_, success, error, message, response } = await fetchData_(`/api/token/access/`)
            if (success === true) {
                setAccessToken(data_.access_token)
            }
        }
        f();
    }, []);
    
    if (!user?.username) {
        return <>
            <ModelInfo id={id} />
            <PleaseLoginMessage />
        </>
    }

    const message_props = {
        'id': id,
        'task_id': taskId_,
        'accessToken': accessToken
    }

    const apiBaseRouteActionProgress = `/${resourceType}/image/action-progress`

    return (
        <>
            <ModelInfo id={id}/>
            <DivActionResponseView
                buttonName={MODEL_ACTIONS.MODEL_ANALYSIS_NAME}
                apiRoute={`/model/${apiRouteBaseActionProgressStatus}-a`}                
                type={MODEL_ACTIONS.MODEL_ANALYSIS}
                parameters={MODEL_ACTION_PARAMS.D}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName={MODEL_ACTIONS.DISTILLATION_NAME}
                apiRoute={`${apiBaseRouteActionProgress}-a`} 
                type={MODEL_ACTIONS.DISTILLATION}
                parameters={MODEL_ACTION_PARAMS.A}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName={MODEL_ACTIONS.FINE_TUNING_NAME}
                apiRoute={`${apiBaseRouteActionProgress}-b`}
                type={MODEL_ACTIONS.FINE_TUNING}
                parameters={MODEL_ACTION_PARAMS.B}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName={MODEL_ACTIONS.EXPLAINABLE_AI_NAME}
                apiRoute={`${apiBaseRouteActionProgress}-c`}
                type={MODEL_ACTIONS.EXPLAINABLE_AI}
                parameters={MODEL_ACTION_PARAMS.C}
                message_props={message_props}
            />
        </>
    )
}

export const apiRouteBaseActionProgressStatus = 'image/async-file-stream/action'

export const MODEL_ACTIONS = {
    MODEL_ANALYSIS_NAME: 'Model Analysis',
    MODEL_ANALYSIS: 'analysis',
    DISTILLATION_NAME: "Distillation",
    DISTILLATION: "cleaning",
    FINE_TUNING_NAME: 'Fine Tuning',
    FINE_TUNING: 'enrichment',
    EXPLAINABLE_AI_NAME: 'XAI',
    EXPLAINABLE_AI: 'curation',

}

export const MODEL_ACTION_PARAMS = {
    A: { 'paramA': 'distillation_valueA' },
    B: { 'paramA': 'fine_tuning_valueB' },
    C: { 'paramA': 'explainable_ai_valueC' },
    D: { 'paramA': 'model_analysis_valueD' },
}