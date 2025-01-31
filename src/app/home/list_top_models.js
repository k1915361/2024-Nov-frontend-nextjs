'use client'

import { useEffect, useState } from "react";
import { LinkDark, ListItemDivBox, OverviewCardWrapper } from "../_components/components";
import { Text2ndarySmall } from "../_components/components";
import { fetchData } from "../login/fetchData";
import dayjs from "@/app/_components/dayjsRelativeTime";
import 'tailwindcss'

export const borderLightShadowClassname = 'flex items-center justify-between gap-4 p-2 rounded-lg bg-linear-to-r from-gray-100 to-gray-50 shadow-sm ms-0 m-3 p-2 py-3 border-1 border-gray-200'

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
                    <OverviewCardWrapper key={model.id}>
                        <span>
                            <span>{index+1}. </span>
                            <LinkDark href={`/model/${model.id}`}>{model.name}</LinkDark>
                            <Text2ndarySmall> • {model.username}</Text2ndarySmall> 
                            <Text2ndarySmall> • {dayjs(model.updated).fromNow()}</Text2ndarySmall>
                            <Text2ndarySmall> • {model.is_public ? 'public' : 'private'}</Text2ndarySmall>
                            <Text2ndarySmall>{model.original_model && ' • forked'}</Text2ndarySmall>                            
                        </span>
                    </OverviewCardWrapper>                
                    
                    )
                )}

                {list?.length == 0 && 
                    <p>No List of Top Models available.</p>
                }
            </div>
        </div>
    );
}