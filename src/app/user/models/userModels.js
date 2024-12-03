'use client'

import { useEffect, useState } from "react";
import dayjs from "@/app/_components/dayjsRelativeTime";
import { fetchData } from "@/app/login/fetchData";
import { LinkText, ListItemBox, Text2ndarySmall } from "@/app/home/page";
import { ButtonLight } from "./page";


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
            {list?.length !== 0 && 
                list?.map((model) => (
                    <ButtonLight key={model.id}>
                        <LinkText>{model.name}</LinkText>
                        <Text2ndarySmall> • {dayjs(model.updated).fromNow()}</Text2ndarySmall>
                        <Text2ndarySmall>{model.original_model && ' • forked'}</Text2ndarySmall>
                    </ButtonLight>                
                )
            )}

            {list?.length == 0 && 
                <p>No List of User Models available.</p>
            }
            
        </>
    );
}