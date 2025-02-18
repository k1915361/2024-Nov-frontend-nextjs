'use client'

import { getFileExtension, isImage, isReadableText } from '@/app/dataset/tree/[id]/[...path]/page';
import { WEBSOCKET_URL, STATIC_URL } from '@/app/login/fetchData';
import { BorderLight, DivButtonLight } from "@/app/_components/components";
import { ButtonLight } from "@/app/_components/components";
import { useState, useEffect } from 'react';
import ViewTextFileClientSide from '@/app/dataset/blob/[id]/[...path]/viewTextFileClientSide';
import { borderLightClassName } from '../serverUtils';
import { TextLighter } from '@/app/dataset/viewer/tabulateArray';
import { sendWebSocketMessage } from '../page';

export function removeStaticServerBaseURL(url, source=STATIC_URL+'/', target='') {
    return url.replace(source, target)
}

export function ViewFileLink({href, name, children, changeDisplayNameFunction=removeStaticServerBaseURL, ...props}) {
    return <a href={href} {...props}>
        {changeDisplayNameFunction(href)}
        {children}
    </a>
}

export function ProgressBarViewDataset({ total_steps = 3, apiRoute = '/dataset/image/action-progress', buttonName = 'Start Task', type = '', parameters = {}, objectType='dataset' }) {
    return <ProgressBarView 
        total_steps={total_steps}
        apiRoute={apiRoute}
        buttonName={buttonName}
        type={type}
        parameters={parameters} 
        objectType={objectType}
    />
}

export function ProgressBarView({     
    total_steps = 2, 
    apiRoute = '/dataset/image/action-progress', 
    buttonName = 'Start Task', 
    type = '', 
    parameters = {}, 
    message_props 
}) {
    const [progress, setProgress] = useState({ current: 0, total: 100 });
    const [wsocket, setWsocket] = useState(null);

    useEffect(() => {
        console.log(' ProgressBarView useEffect ')
        const newWs = new WebSocket(`${WEBSOCKET_URL}${apiRoute}`);
        setWsocket(newWs);

        newWs.onopen = () => {
            console.log('WebSocket connected');
        };

        newWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setProgress(data);
            if(data?.finished && data?.success) {
                wsocket?.close()
            }
        };
        
        newWs.onclose = () => {
            console.log('WebSocket disconnected');
            setWsocket(null);
        };

        return () => {
            if (wsocket) wsocket.close();
        };
    }, []);

    const startTask = () => {
        console.log(' - startTask ')
        if (wsocket && wsocket.readyState === WebSocket.OPEN) { 
            wsocket.send(JSON.stringify({ type: 'start_task', total_steps: total_steps })); 
            sendWebSocketMessage(wsocket, { parameters: parameters, ...message_props }, type || undefined)
        } else {
            console.log("Websocket not connected.")
        }        
    };

    const progressPercentage = Math.round((progress.current / progress.total) * 100, 2);
    const disabled = wsocket === null

    return (
        <BorderLight>       
            {wsocket === null && 
                <div>
                    Disconnected, please refresh the page to use again.
                </div>
            }
            <div>
                <ButtonLight onClick={startTask} disabled={disabled}>
                    {buttonName}
                </ButtonLight>
            </div>

            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax={progress.total}>
                <div className="progress-bar" style={{width: `${progressPercentage}%`}}>{progressPercentage}%</div>
            </div>
            {(progress?.finished === true 
                && isReadableText[getFileExtension(progress?.result_url || '')])
                && <>
                    <ViewFileLink href={progress?.result_url}/>
                    <ViewTextFileClientSide 
                        apiRoute={`${progress?.result_url}`} 
                        apiRoot='' 
                        apiSeparator='' 
                        className={borderLightClassName}
                    />
                    <TextLighter>Result Dataset expires and is deleted from server in 24 hours:</TextLighter>
                    <DivButtonLight>
                        Download Result 
                    </DivButtonLight> 
                </>
            }
            {(progress?.finished === true 
                && isImage[getFileExtension(progress?.result_url || '')])
                && 
                <>
                    <img className="imageView img-thumbnail" src={progress?.result_url}/>
                    <TextLighter>Result Dataset expires and is deleted from server in 24 hours:</TextLighter>
                    <DivButtonLight>
                        Download Result 
                    </DivButtonLight>
                </>
                
            }                
        </BorderLight>
    );

}