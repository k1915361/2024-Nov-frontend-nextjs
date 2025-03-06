'use client';
import { BorderLight, ButtonLight } from "@/app/_components/components";
import { useState } from "react"


export function DivActionResponseView({ buttonName, apiRoute, ...props }) {
    return <div>
        <ActionResponseView
            buttonName={buttonName}
            apiRoute={apiRoute}
            {...props} />
    </div>;
}

export function ActionResponseView({ buttonName, apiRoute, type=undefined, parameters={}, ...props}) {
    const [events, setEvents] = useState([]);
    
    function handleOnClickWebsocketEvents() {
        const socket = handleWebsocketEvents(WEBSOCKET_URL, apiRoute, type, parameters)
        socket.onmessage = (event) => {
            socketOnMessageAppendListState(event, setEvents, socket)
        };
        socketOnErrorClose(socket)
    } 
    
    return (
        <BorderLight>
            <ButtonLight onClick={handleOnClickWebsocketEvents}>
                {buttonName}
            </ButtonLight>
            <div>
                {events.map((data, index) => (
                    <BorderLightFullWidth key={index}>
                        {data.file_url !== undefined &&
                            <img src={`${data.file_url}`}/>
                        }
                        <div>Step {data.step}</div> 
                        <div>Status: {data.status}</div> 
                    </BorderLightFullWidth>
                ))}
            </div>            
        </BorderLight>
    )
}
