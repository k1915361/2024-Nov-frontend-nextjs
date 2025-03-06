'use client'

import { DATASET_API_URL, API_ROOT, WEBSOCKET_URL, fetchData, sendJsonFetchResponse } from "@/app/login/fetchData";
import { useEffect, useState } from "react";
import { appendListState } from "../../../../image/test-async-file-stream/page";
import ViewDirectoryTree from "../../../../directoryTreeView";
import { BorderLightFullWidth } from "@/app/_components/components";

export const sendWebSocketMessage = (socket, data, type='start_task') => {
    socket.send(JSON.stringify({ type: type, payload: data }));
}

export const handleSendWebSocketMessage = (socket, data, type='start_task') => {
    if (!socket) {
        return
    }
    if (socket.readyState === WebSocket.OPEN) {
        sendWebSocketMessage(socket, data, type)        
    } else if (socket.readyState === WebSocket.CONNECTING) {
        socket.onopen = () => {
            sendWebSocketMessage(socket, data, type)
            socket.onopen = null; 
        }
    } else if (socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING) {
        console.log('Could not send web socket message. WebSocket is closed or closing.')
    }
};

export const ImageWithDefault = ({ src, defaultSrc, alt, title }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [altInfo, setAltInfo] = useState(alt);

    const handleError = () => {
        setImageSrc(defaultSrc || '/static/image/fallback/image.png');
        setAltInfo("No access permission or non-existing/deleted data.")
    };

    return (
        <img
            src={imageSrc}
            onError={handleError}
            alt={altInfo}
            title={title || altInfo}
        >
        </img>
    )
}

export function socketOnMessageAppendListState(event, setEvents, socket = undefined) {
    const data = JSON.parse(event.data);
    appendListState(setEvents, data)
    if (socket && (data?.success === true || data?.success === false)) {
        socket?.close()
    }
}

export function socketOnErrorClose(socket) {    
    socket.onerror = (error) => {
        console.log("WebSocket error:", error);
        socket.close();
    }
}

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);
    const [img, setImage] = useState(null);
    
    useEffect(() => {
        const socket = new WebSocket(`${WEBSOCKET_URL}/dataset/image/async-file-stream/`);
        
        socket.onmessage = (event) => {
            socketOnMessageAppendListState(event, setEvents, socket)
        };
        
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className="p-4">
            <h2>Asynchronous WebSocket JSON</h2>
            <ViewDirectoryTree api='1-20241120_154348-CS_dataset'/>
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
            <div>
                <img src={`${DATASET_API_URL}/1-20241120_154348-CS_dataset/test/images/ppe_0104_jpg.rf.36f0fdcaa15cdc7277b6d67e334e43b5.jpg`}/>                
            </div>
        </div>
    );
}
