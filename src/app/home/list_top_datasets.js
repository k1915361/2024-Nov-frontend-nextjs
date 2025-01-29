"use client";

import { useEffect, useState } from "react";
import { LinkDark, ListItemDivBox, Text2ndarySmall } from "./page";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";
import { borderLightShadowClassname } from "./list_top_models";

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
            <div>
                {list?.length !== 0 && list?.map?.((dataset, index) => (
                    <ListItemDivBox key={dataset.id} className={borderLightShadowClassname}>
                        <span>
                            <span>{index+1}. </span>
                            <LinkDark type="dataset" id={dataset.id} href={`/dataset/${dataset.id}`}>{dataset.name}</LinkDark>
                            <Text2ndarySmall> • {dataset.username}</Text2ndarySmall> 
                            <Text2ndarySmall> • {dayjs(dataset.updated).fromNow()}</Text2ndarySmall>
                            <Text2ndarySmall> • {dataset.is_public ? 'public' : 'private'}</Text2ndarySmall>
                            <Text2ndarySmall>{dataset.original_dataset && ' • forked'}</Text2ndarySmall>                            
                        </span>
                    </ListItemDivBox>                
                ))}

                {list?.length == 0 && 
                    <p>No List of Top Datasets available.</p>
                }
            </div>
        </div>
    );
}