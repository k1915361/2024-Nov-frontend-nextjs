"use client";

import { useEffect, useState } from "react";
import { LinkText, ListItemBox, Text2ndarySmall } from "./page";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";

export default function TopDatasets() {
    const route = '/api/top-datasets/'
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
                {list?.length !== 0 && list?.map?.((dataset) => (
                    <ListItemBox key={dataset.id}>
                        <span>
                            <LinkText type="dataset" id={dataset.id}>{dataset.name}</LinkText>
                            <Text2ndarySmall> • {dataset.username}</Text2ndarySmall> 
                            <Text2ndarySmall> • {dayjs(dataset.updated).fromNow()}</Text2ndarySmall>
                            <Text2ndarySmall> • {dataset.is_public ? 'public' : 'private'}</Text2ndarySmall>
                            <Text2ndarySmall>{dataset.original_dataset && ' • forked'}</Text2ndarySmall>                            
                        </span>
                    </ListItemBox>                
                ))}

                {list?.length == 0 && 
                    <p>No List of Top Datasets available.</p>
                }
            </ol>
        </div>
    );
}