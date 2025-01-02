'use client'

import { API } from "@/app/login/fetchData";
import { useEffect, useState } from "react";
import { closeEventSourceOnError, streamEventSource } from "../test-async-file-stream/page";

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource(`${API}/dataset/image/test-async-file-stream-json/`);

        eventSource.onmessage = (event) => {
            const data = event.data;
            const img = new Image();
            
            if (data.file_data !== undefined) {
                img.src = getJpegBase64(data.file_data);                            
            } 

            appendListState(setImages, img)
            appendListState(setEvents, data)
        }

        closeEventSourceOnError(eventSource)
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Streaming Events</h2>
            <div style={{ maxHeight: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
                {events.map((data, index) => (
                    <div key={index} style={{ marginBottom: "10px", padding: "5px", backgroundColor: "#f9f9f9" }}>
                        {data}
                    </div>
                ))}
            </div>
        </div>
    );
}
