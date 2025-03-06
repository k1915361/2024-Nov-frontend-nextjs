'use client'

import ViewDirectoryTree from "@/app/dataset/directoryTreeView";
import { handleSendWebSocketMessage, socketOnErrorClose, socketOnMessageAppendListState } from "./image/page";
import { WEBSOCKET_URL } from "@/app/login/fetchData";
import { ProgressBarView } from "../../task/websocket/actionProgressBarView";
import { ActionResponseView } from "../../DivActionResponseView";

/** @deprecated. to be removed. */
export function handleWebsocketEvents(
    apiRoot=WEBSOCKET_URL, 
    apiRoute='/dataset/image/async-file-stream/', 
    type=undefined, 
    parameters={}
) {
    const socket = new WebSocket(`${apiRoot}${apiRoute}`);

    handleSendWebSocketMessage(socket, parameters, type)

    return socket
}

/** @deprecated. to be removed. */
export default function EventSourceClient() {

    return (
        <div className="p-4">
            <h2>Asynchronous WebSocket JSON</h2>
            <ViewDirectoryTree apiRoute='1-20241120_154348-CS_dataset'/>
            <ActionResponseView buttonName='Action'/>
            <ActionResponseView
                buttonName='ActionA'
                apiRoute='/dataset/image/async-file-stream/action-a'
            />
            <ActionResponseView
                buttonName='ActionB'
                apiRoute='/dataset/image/async-file-stream/action-b'
            />
            <ActionResponseView
                buttonName='ActionC'
                apiRoute='/dataset/image/async-file-stream/action-c'
            />
            <ActionResponseView
                buttonName='ActionD'
                apiRoute='/dataset/image/async-file-stream/action-d'
            />
            <ActionResponseView
                buttonName='ActionE'
                apiRoute='/dataset/image/async-file-stream/action-e'
            />
            <ProgressBarView/>
            <ProgressBarView 
                apiRoute="/dataset/image/action-progress-a" buttonName="Start Task A"/>
            <ProgressBarView buttonName="Start Task B" 
                apiRoute="/dataset/image/action-progress-b"/>
            <ProgressBarView buttonName="Start Task C" 
                apiRoute="/dataset/image/action-progress-c"/>
            <ProgressBarView buttonName="Start Task D" 
                apiRoute="/dataset/image/action-progress-d"/>
            <ProgressBarView buttonName="Start Task E" 
                apiRoute="/dataset/image/action-progress-e"/>            
        </div>
    );
}