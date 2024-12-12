'use client'

import { useEffect, useState } from "react";
import { LinkText, ListItemBox, Text2ndarySmall } from "./page";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";

export default function TopModels() {
    const route = '/api/top-models/'
    const [list, setList] = useState([]);

    useEffect(() => {
        async function f() {
            const data = await fetchData(route, {})
            if (data != "Fetch Error" && data != "Fetch Failed. Response not ok"){
                setList(data)
            }
        }
        f();
    }, []);
    
    return (
        <div>
            <ol>
                {list?.map?.((model) => (
                        <ListItemBox key={model.id}>
                            <span>
                                <LinkText id={model.id}>{model.name}</LinkText>
                                <Text2ndarySmall> • {model.username}</Text2ndarySmall> 
                                <Text2ndarySmall> • {dayjs(model.updated).fromNow()}</Text2ndarySmall>
                                <Text2ndarySmall> • {model.is_public ? 'public' : 'private'}</Text2ndarySmall>
                                <Text2ndarySmall>{model.original_model && ' • forked'}</Text2ndarySmall>                            
                            </span>
                        </ListItemBox>                
                    )
                )}

                {list?.length == 0 && 
                    <p>No List of Top Models available.</p>
                }
            </ol>
        </div>
    );
}