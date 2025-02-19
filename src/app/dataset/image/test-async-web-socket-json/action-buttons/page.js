'use client'

import ViewDirectoryTree from "@/app/dataset/directoryTreeView";
import { newWebSocketAndSetState, sendWebSocketMessage } from "../page";
import { WEBSOCKET_URL } from "@/app/login/fetchData";
import { BorderLight, ButtonLight } from "@/app/_components/components";
import { useState } from "react";
import { ProgressBarView } from "../action-progress/actionProgressBarView";
import { BorderLightFullWidth } from "@/app/_components/components";

export function handleWebsocketEvents(
    setEvents, 
    apiRoot=WEBSOCKET_URL, 
    apiRoute='/dataset/image/test-async-file-stream-json/', 
    type=undefined, 
    parameters={}
) {
    const socket = newWebSocketAndSetState(`${apiRoot}${apiRoute}`, setEvents);
    sendWebSocketMessage(socket, parameters, type)

    return socket
}

export function ActionResponseView({ buttonName, apiRoute, type=undefined, parameters={}, ...props}) {
    const [events, setEvents] = useState([]);
    
    function handleOnClickWebsocketEvents() {
        const socket = handleWebsocketEvents(setEvents, WEBSOCKET_URL, apiRoute, type, parameters)
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data?.finished === true) {
                socket.close()
            }
        };
        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
            socket.close(); 
        }
    } 
    
    return (
        <BorderLight>
            <ButtonLight onClick={handleOnClickWebsocketEvents}>
                {buttonName}
            </ButtonLight>
            <div>
                {events.map((data, index) => (
                    <BorderLightFullWidth key={index}>
                        {data.image_url !== undefined &&
                            <img src={`${data.image_url}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </BorderLightFullWidth>
                ))}
            </div>            
        </BorderLight>
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