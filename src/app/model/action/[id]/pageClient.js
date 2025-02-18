'use client'

import { DivActionResponseView } from "@/app/dataset/image/test-async-web-socket-json/action-buttons/page";
import { ProgressBarView } from "@/app/dataset/image/test-async-web-socket-json/action-progress/actionProgressBarView";
import ModelInfo from "./modelInfo";
import { useEffect, useState } from "react";
import { fetchData_ } from "@/app/login/fetchData";
import { useAuth } from "@/app/context/AuthContext";

export default function PageClient({ id, taskId = '', task_name = '', isDataset = true }) {
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

    const message_props = {
        'id': id,
        'task_id': taskId_,
        'accessToken': accessToken
    }

    return (
        <>
            {!user?.username &&
                <div>
                    You must log in to apply actions.
                </div>
            }     
            <ModelInfo id={id}/>
            {/* TODO make model API and change these dataset API below */}
            <DivActionResponseView
                buttonName='Model Analysis'
                apiRoute='/model/image/test-async-file-stream-json/action-a'
                type='analysis'
                parameters={{ 'paramA': 'model_analysis_valueA' }}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName="Distillation"
                apiRoute="/model/image/action-progress-action-a" 
                type='cleaning'
                parameters={{ 'paramA': 'distillation_valueA' }}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName="Fine Tuning"
                apiRoute="/model/image/action-progress-action-b"
                type='enrichment'
                parameters={{ 'paramA': 'fine_tuning_valueB' }}
                message_props={message_props}
            />
            <ProgressBarView
                buttonName="XAI"
                apiRoute="/model/image/action-progress-action-c"
                type='curation'
                parameters={{ 'paramA': 'explainable_ai_valueC' }}
                message_props={message_props}
            />
        </>
    )
}