'use client'

import { getFileExtension, isImage, isReadableText } from '@/app/dataset/tree/[id]/[...path]/page';
import { WEBSOCKET_URL, STATIC_URL } from '@/app/login/fetchData';
import { BorderLight, DivButtonLight, Text2ndarySmall } from "@/app/_components/components";
import { ButtonLight } from "@/app/_components/components";
import { useState, useEffect } from 'react';
import ViewTextFileClientSide from '@/app/dataset/blob/[id]/[...path]/viewTextFileClientSide';
import { borderLightClassName } from '../../../image/test-async-web-socket-json/serverUtils';
import { TextLighter } from '@/app/dataset/viewer/tabulateArray';
import { handleSendWebSocketMessage } from '../../test/websocket/image/page';

export function removeStaticServerBaseURL(url, source=STATIC_URL+'/', target='') {
    return url.replace(source, target)
}

export function FileLink({href, name, children, changeDisplayNameFunction=removeStaticServerBaseURL, ...props}) {
    return <a title={href} href={href} {...props}>
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

export const ProgressBar = ({ percentage, valuemax="100", ...props }) => (
    <div className="progress" role="progressbar" aria-label="Progress" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax={valuemax} {...props}>
        <div className="progress-bar" style={{ width: `${percentage}%` }}>{percentage}%</div>
    </div>
);

export const ResultPreview = ({ resultUrl, children }) => {
    const fileExtension = getFileExtension(resultUrl || '');

    if (isReadableText[fileExtension]) {
        return (
            <>
                <FileLink href={resultUrl} />
                <ViewTextFileClientSide
                    apiRoute={resultUrl}
                    apiRoot=""
                    apiSeparator=""
                    className={borderLightClassName}
                />
                {children}
            </>
        );
    }

    if (isImage[fileExtension]) {
        return (
            <>
                <img className="imageView img-thumbnail" src={resultUrl} alt="Result preview" />
                {children}
            </> 
        )
    }

    return null;
};

export const DownloadSection = () => (
    <>
        <TextLighter>Result Dataset expires and is deleted from server in 24 hours:</TextLighter>
        <DivButtonLight>Download Result</DivButtonLight>
    </>
);

export function ProgressBarView({     
    total_steps = 1, 
    apiRoute = '/dataset/image/action-progress', 
    buttonName = 'Start Task', 
    type = '', 
    parameters = {}, 
    message_props,
    onMessage = ()=>''
}) {
    const [progress, setProgress] = useState({ current: 0, total: 100 });
    const [socket, setSocket] = useState(null);
    
    const handleMessage = (event) => {
        const data = JSON.parse(event.data);
        setProgress(data);
        if (!data?.loading && data?.success) {
            socket?.close()
        }
    };

    useEffect(() => {
        const ws = new WebSocket(`${WEBSOCKET_URL}${apiRoute}`);

        ws.onopen = () => console.log('WebSocket connected');
        ws.onmessage = handleMessage
        ws.onclose = () => {
            console.log('WebSocket disconnected');
            setSocket(null);
        };

        setSocket(ws);
    }, [apiRoute]);

    const startTask = () => {
        handleSendWebSocketMessage(
            socket, 
            { parameters: parameters, 
                total_steps: total_steps, 
                ...message_props 
            }, 
            type || undefined
        )
    };

    const progressPercentage = Math.round((progress.current / progress.total) * 100, 2);
    const isDisabled = !socket
    const tooltipTitle = isDisabled ? "Refresh this page to use again." : ''

    return (
        <BorderLight addClassname='truncate'>
            {isDisabled && 
                <Text2ndarySmall>
                    Refresh the page to use again.
                </Text2ndarySmall>
            }
            <div>
                <ButtonLight onClick={startTask} disabled={isDisabled}>
                    {buttonName}
                </ButtonLight>
            </div>
            <ProgressBar percentage={progressPercentage} />
            {progress?.success && <>
                    <ResultPreview resultUrl={progress.file_url}>
                        <DownloadSection/>
                    </ResultPreview>
                </>
            }
        </BorderLight>
    );

}