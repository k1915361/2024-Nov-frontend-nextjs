'use client'

import { API_ROOT_WEBSOCKET } from "@/app/login/fetchData";
import { useEffect, useState } from "react";
import { appendListState } from "../test-async-file-stream/page";

export function f({index, children, ...props}) {
    return (
        <div key={index} className="border border-light-subtle p-1 mb-1" {...props}>
            {children}
        </div>
    )
}

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        const socket = new WebSocket(`${API_ROOT_WEBSOCKET}/dataset/image/test-async-file-stream-json/`);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data); 

            appendListState(setEvents, data)
        };

        socket.onerror = (error) => {
            console.log("WebSocket error:", error);
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div className="p-4">
            <h2>Asynchronous WebSocket JSON</h2>
            <div>
                {events.map((data, index) => (
                    <div key={index} className="border border-light-subtle p-1 mb-1">
                        {data.image_url !== undefined &&
                            <img src={`${data.image_url}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </div>
                ))}
            </div>
        </div>
    );
}
