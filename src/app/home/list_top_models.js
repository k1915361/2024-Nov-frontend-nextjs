'use client'

import { useEffect, useState } from "react";
import { LinkText, ListItemBox, ListItemDivBox, Text2ndarySmall } from "./page";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";

export const borderLightShadowClassname = 'border border-light-subtle ms-0 m-3 p-2 rounded shadow-sm'

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
            <div>
                {list?.map?.((model, index) => (
                    <ListItemDivBox key={model.id} className={borderLightShadowClassname}>
                        <span>
                            <span>{index+1}. </span>
                            <LinkText id={model.id}>{model.name}</LinkText>
                            <Text2ndarySmall> • {model.username}</Text2ndarySmall> 
                            <Text2ndarySmall> • {dayjs(model.updated).fromNow()}</Text2ndarySmall>
                            <Text2ndarySmall> • {model.is_public ? 'public' : 'private'}</Text2ndarySmall>
                            <Text2ndarySmall>{model.original_model && ' • forked'}</Text2ndarySmall>                            
                        </span>
                    </ListItemDivBox>                
                    
                    )
                )}

                {list?.length == 0 && 
                    <p>No List of Top Models available.</p>
                }
            </div>
        </div>
    );
}