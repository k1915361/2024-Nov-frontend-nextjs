'use client'

import { API_HTTP } from "@/app/login/fetchData";
import { useEffect, useState } from "react";

export function streamEventSource(url, setEvents) {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
        setEvents((prevEvents) => [...prevEvents, event.data]);
    };

    return eventSource
}

export function closeEventSourceOnError(eventSource) {
    eventSource.onerror = function(event) {
        console.log('Streaming finished or Error occurred:', event);
        eventSource.close(); 
    };
}

export function getJpegBase64(file_data) {
    return `data:image/jpeg;base64,${file_data}`;
}

export function appendListState(set, item) {
    set((list) => [...list, item])
}

export default function EventSourceClient() {
    const [events, setEvents] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource(`${API_HTTP}/dataset/image/test-async-file-stream/`);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
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
            <div style={{ border: "1px solid #eee", padding: "10px" }}>
                {events.map((data, index) => (
                    <div key={index} className="border border-light-subtle" style={{ marginBottom: "10px", padding: "5px", }}>
                        {images[index].src !== '' &&
                            <img src={`${images[index].src}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </div>
                ))}
            </div>
        </div>
    );
}
