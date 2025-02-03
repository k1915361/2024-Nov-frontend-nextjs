'use client'

import { API_DATASET_ROOT, API_HTTP, API_ROOT_WEBSOCKET, fetchData, fetchResponse } from "@/app/login/fetchData";
import { useEffect, useState } from "react";
import { appendListState } from "../test-async-file-stream/page";
import ViewDirectoryTree from "../../directoryTreeView";
import { BorderLight } from "@/app/_components/components";

export function newWebSocketAndSetState(api, setState) {
    const socket = new WebSocket(api);

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data); 

        appendListState(setState, data)
    };

    socket.onerror = (error) => {
        console.log("WebSocket error:", error);
    };

    return socket
}

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

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);
    const [img, setImage] = useState(null);
    
    useEffect(() => {
        const socket = newWebSocketAndSetState(`${API_ROOT_WEBSOCKET}/dataset/image/test-async-file-stream-json/`, setEvents);
        
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
                    <BorderLight key={index}>
                        {data.image_url !== undefined &&
                            <img src={`${data.image_url}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </BorderLight>
                ))}
            </div>
            <div>
                <img src={`${API_DATASET_ROOT}/1-20241120_154348-CS_dataset/test/images/ppe_0104_jpg.rf.36f0fdcaa15cdc7277b6d67e334e43b5.jpg`}/>                
            </div>
        </div>
    );
}
