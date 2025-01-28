'use client'

import { getFileExtension, isImage, isReadableText } from '@/app/dataset/tree/[id]/[...path]/page';
import { API_ROOT_WEBSOCKET, HTTP_STATIC_SERVER } from '@/app/login/fetchData';
import { ButtonLight, DivButtonLight } from '@/app/user/models/page';
import { useState, useEffect } from 'react';
import ViewTextFileClientSide from '@/app/dataset/tree/[id]/[...path]/viewTextFileClientSide';
import { borderLightClassName } from '../serverUtils';
import { Text2ndarySmall } from '@/app/home/page';
import { TextSecondary } from '@/app/home/list_models';
import { TextLighter } from '@/app/dataset/viewer/tabulateArray';

export function removeStaticServerBaseURL(url, source=HTTP_STATIC_SERVER+'/', target='') {
    return url.replace(source, target)
}

export function ViewFileLink({href, name, children, changeDisplayNameFunction=removeStaticServerBaseURL, ...props}) {
    return <a href={href} {...props}>
        {changeDisplayNameFunction(href)}
        {children}
    </a>
}

export function ProgressBarView({total_steps = 3, apiRoute='/dataset/image/action-progress', buttonName='Start Task'}) {
    const [progress, setProgress] = useState({ current: 0, total: 100 });
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const newWs = new WebSocket(`${API_ROOT_WEBSOCKET}${apiRoute}`);
        setWs(newWs);

        newWs.onopen = () => {
            console.log('WebSocket connected');
        };

        newWs.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setProgress(data);
            if(data.finished) {
                setWs(null);
            }
        };

        newWs.onclose = () => {
            console.log('WebSocket disconnected');
        };

        return () => {
            if (ws) ws.close();
        };
    }, []);

    const startTask = () => {
        if (ws && ws.readyState === WebSocket.OPEN) { 
            ws.send(JSON.stringify({ type: 'start_task', total_steps: total_steps })); 
        } else {
            console.log("Websocket not connected.")
        }
    };

    const progressPercentage = Math.round((progress.current / progress.total) * 100, 2);

    return (
        <>
            <div>
                <ButtonLight onClick={startTask}>
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
        </>
    );

}