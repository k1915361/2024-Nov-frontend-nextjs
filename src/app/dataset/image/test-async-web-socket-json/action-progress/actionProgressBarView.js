'use client'

import { getFileExtension, isReadableText } from '@/app/dataset/tree/[id]/[...path]/page';
import { API_ROOT_WEBSOCKET, HTTP_STATIC_SERVER } from '@/app/login/fetchData';
import { ButtonLight } from '@/app/user/models/page';
import { useState, useEffect } from 'react';
import { borderLightClassName } from '../page';
import ViewTextFileClientSide from '@/app/dataset/tree/[id]/[...path]/viewTextFileClientSide';

export function removeStaticServerBaseURL(url, source=HTTP_STATIC_SERVER+'/', target='') {
    return url.replace(source, target)
}

export function ViewFileLink({href, name, children, changeDisplayNameFunction=removeStaticServerBaseURL, ...props}) {
    return <a href={href} {...props}>
        {changeDisplayNameFunction(href)}
        {children}
    </a>
}

export function ProgressBarView({total_steps = 3}) {
    const [progress, setProgress] = useState({ current: 0, total: 100 });
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const newWs = new WebSocket(`${API_ROOT_WEBSOCKET}/dataset/image/test-async-file-stream-json/action-progress`);
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
                <ButtonLight onClick={startTask}>Start Task</ButtonLight>
            </div>

            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax={progress.total}>
                <div className="progress-bar" style={{width: `${progressPercentage}%`}}>{progressPercentage}%</div>
            </div>
            {isReadableText[getFileExtension(progress?.result_url || '')] 
                && <>
                    <ViewFileLink href={progress?.result_url}/>                    
                    <ViewTextFileClientSide 
                        apiRoute={`${progress?.result_url}`} 
                        apiRoot='' 
                        apiSeparator='' 
                        className={borderLightClassName}
                    />
                </>
            }
        </>
    );

}