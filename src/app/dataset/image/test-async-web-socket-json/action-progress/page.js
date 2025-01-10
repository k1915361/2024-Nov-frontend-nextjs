'use client'

import { API_ROOT_WEBSOCKET } from '@/app/login/fetchData';
import PageComponent from '@/app/page_component';
import { ButtonLight } from '@/app/user/models/page';
import { useState, useEffect } from 'react';

export default function ProgressBarView() {
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
            ws.send(JSON.stringify({ type: 'start_task', total_steps: 20 })); 
        } else {
            console.log("Websocket not connected.")
        }
    };

    const progressPercentage = Math.round((progress.current / progress.total) * 100, 2);

    return (
        <PageComponent>
            <div>
                <ButtonLight onClick={startTask}>Start Task</ButtonLight>
            </div>
                        
            <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax={progress.total}>
                <div className="progress-bar" style={{width: `${progressPercentage}%`}}>{progressPercentage}</div>
            </div>

        </PageComponent>
    );
}