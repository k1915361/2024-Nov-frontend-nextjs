"use client";

import { useEffect, useState } from "react";
import { OverviewCardWrapper } from "../_components/components";
import { fetchData } from "../login/fetchData";
import { ListDatasetItem } from "./listDatasetItem";

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
                    <OverviewCardWrapper 
                        key={dataset.id} 
                    >
                        <ListDatasetItem 
                            dataset={dataset} 
                            index={`${index+1}.`} 
                            href={`/dataset/${dataset.id}`} 
                        />
                    </OverviewCardWrapper>                
                ))}

                {list?.length == 0 && 
                    <p>No List of Top Datasets available.</p>
                }
            </div>
        </div>
    );
}