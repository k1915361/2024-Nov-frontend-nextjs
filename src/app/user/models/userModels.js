'use client'

import { useEffect, useState } from "react";
import dayjs from "@/app/_components/dayjsRelativeTime";
import { fetchData } from "@/app/login/fetchData";
import { LinkText, OverviewCardWrapper } from "@/app/_components/components";
import { Text2ndarySmall } from "@/app/_components/components";
import { ButtonLight, LinkButtonLight } from "./page";
import { ListModelItem } from "@/app/home/list_models";


export default function UserModels() {
    const route = '/api/user/models/'
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
        <>
            {list?.length && list?.length != 0 &&
                <>
                    <h5>My Models</h5>

                    {list?.map?.((model) => (
                        <OverviewCardWrapper key={model.id}>
                            <ListModelItem model={model} href={`/model/${model.id}`} 
                                isPublicSignVisible={false}
                                isUsernameVisible={false}                                
                            />
                        </OverviewCardWrapper>
                    ))}

                    <LinkButtonLight href='/user/models/?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </>
            }

            {list?.length == 0 && 
                <p>No List of User Models available.</p>
            }
            
        </>
    );
}