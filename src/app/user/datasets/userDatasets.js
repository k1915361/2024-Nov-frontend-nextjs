'use client'

import { useEffect, useState } from "react";
import { fetchData } from "@/app/login/fetchData";
import { OverviewCardWrapper } from "@/app/_components/components";
import { LinkButtonLight } from "@/app/_components/components";
import { ListDatasetItem } from "@/app/home/listDatasetItem";

export default function UserDatasets() {
    const route = '/api/user/datasets/'
    const [list, setList] = useState([]);

    useEffect(() => {
        async function f() {
            const data = await fetchData(route, {})
            if (data != "Fetch Error" && data != "Fetch Failed. Response not ok"){
                setList(data?.list || [])
            }
        }
        f();
    }, []);
    
    return (
        <>
            {(list?.length && list?.length != 0) &&
                <>
                    <h5>My Datasets</h5>

                    {list?.map?.((dataset) => (
                        <OverviewCardWrapper key={dataset.id}>
                            <ListDatasetItem 
                                dataset={dataset} 
                                href={`/dataset/${dataset.id}`} 
                                isUsernameVisible={false}
                            />
                        </OverviewCardWrapper>
                    ))}

                    <LinkButtonLight href='/user/datasets/?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </>
            }

            {list.length == 0 && 
                <p>No List of User Datasets available.</p>
            }
            
        </>
    );
}