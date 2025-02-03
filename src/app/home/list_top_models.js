'use client'

import { useEffect, useState } from "react";
import { OverviewCardWrapper } from "../_components/components";
import { fetchData } from "../login/fetchData";
import 'tailwindcss'
import { ListModelItem } from "./list_models";

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
                        <ListModelItem model={model} index={`${index+1}.`} href={`/model/${model.id}`} />
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