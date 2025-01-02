'use client'

import { API, API_ROOT_WEBSOCKET } from "@/app/login/fetchData";
import { useEffect, useState } from "react";
import { closeEventSourceOnError, streamEventSource } from "../test-async-file-stream/page";

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(`${API_ROOT_WEBSOCKET}/dataset/image/test-async-file-stream-json/`);

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data); 

            const img = new Image();
            
            if (data.file_data !== undefined) {
                img.src = getJpegBase64(data.file_data);                            
            } 

            appendListState(setImages, img)
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
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Streaming Events</h2>
            <div style={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {events.map((data, index) => (
                    <div key={index} style={{ marginBottom: "10px", padding: "5px", backgroundColor: "#f9f9f9" }}>
                        {data.file_data !== '' &&
                            <img src={`${data.file_data}`}/>
                        }
                        <div>Step {data.step}.</div> 
                        <div>Status: {data.status}</div> 
                    </div>
                ))}
            </div>
        </div>
    );
}
