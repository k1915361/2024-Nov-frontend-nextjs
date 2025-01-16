'use client'

import ViewDirectoryTree from "@/app/dataset/directoryTreeView";
import { BorderLight, newWebSocketAndSetState } from "../page";
import { API_ROOT_WEBSOCKET } from "@/app/login/fetchData";
import { ButtonLight } from "@/app/user/models/page";
import { useState } from "react";
import { ProgressBarView } from "../action-progress/actionProgressBarView";

export function handleWebsocketEvents(setEvents, apiRoot=API_ROOT_WEBSOCKET, apiRoute='/dataset/image/test-async-file-stream-json/') {
    console.log(`${apiRoot}${apiRoute}`)
    const socket = newWebSocketAndSetState(`${apiRoot}${apiRoute}`, setEvents);
    
    return () => {
        socket.close();
    };
}

export function ActionResponseView({buttonName, apiRoute}) {
    const [events, setEvents] = useState([]);
    
    function handleOnClickWebsocketEvents() {
        handleWebsocketEvents(setEvents, API_ROOT_WEBSOCKET, apiRoute)
    } 
    
    return (
        <>
            <ButtonLight onClick={handleOnClickWebsocketEvents}>
                {buttonName}
            </ButtonLight>
            <div>
                {events.map((data, index) => (
                    <BorderLight key={index}>
                        {data.image_url !== undefined &&
                            <img src={`${data.image_url}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </BorderLight>
                ))}
            </div>
        </>
    )
}

export function DivActionResponseView({buttonName, apiRoute, ...props}) {
    return <div>
        <ActionResponseView
            buttonName={buttonName}
            apiRoute={apiRoute}
            {...props}
        />
    </div>
}

export default function EventSourceClient() {

    return (
        <div className="p-4">
            <h2>Asynchronous WebSocket JSON</h2>
            <ViewDirectoryTree apiRoute='1-20241120_154348-CS_dataset'/>
            <ActionResponseView buttonName='Action'/>
            <ActionResponseView
                buttonName='ActionA'
                apiRoute='/dataset/image/test-async-file-stream-json/action-a'
            />
            <ActionResponseView
                buttonName='ActionB'
                apiRoute='/dataset/image/test-async-file-stream-json/action-b'
            />
            <ActionResponseView
                buttonName='ActionC'
                apiRoute='/dataset/image/test-async-file-stream-json/action-c'
            />
            <ActionResponseView
                buttonName='ActionD'
                apiRoute='/dataset/image/test-async-file-stream-json/action-d'
            />
            <ActionResponseView
                buttonName='ActionE'
                apiRoute='/dataset/image/test-async-file-stream-json/action-e'
            />
            <ProgressBarView/>
            <ProgressBarView 
                apiRoute="/dataset/image/action-progress-action-a" buttonName="Start Task A"/>
            <ProgressBarView buttonName="Start Task B" 
                apiRoute="/dataset/image/action-progress-action-b"/>
            <ProgressBarView buttonName="Start Task C" 
                apiRoute="/dataset/image/action-progress-action-c"/>
            <ProgressBarView buttonName="Start Task D" 
                apiRoute="/dataset/image/action-progress-action-d"/>
            <ProgressBarView buttonName="Start Task E" 
                apiRoute="/dataset/image/action-progress-action-e"/>
            
        </div>
    );
}