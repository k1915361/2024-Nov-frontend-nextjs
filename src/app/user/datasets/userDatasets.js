'use client'

import { useEffect, useState } from "react";
import dayjs from "@/app/_components/dayjsRelativeTime";
import { fetchData } from "@/app/login/fetchData";
import { LinkText, ListItemBox, Text2ndarySmall } from "@/app/home/page";
import { ButtonLight } from "../models/page";

export default function UserDatasets() {
    const route = '/api/user/datasets/'
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
            {list?.map?.((dataset) => (
                <ButtonLight key={dataset.id}>
                    <LinkText>{dataset.name}</LinkText>
                    <Text2ndarySmall> • {dayjs(dataset.updated).fromNow()}</Text2ndarySmall>
                    <Text2ndarySmall>{dataset.original_dataset && ' • forked'}</Text2ndarySmall>
                </ButtonLight>                
            ))}

            {list?.length == 0 && 
                <p>No List of User Datasets available.</p>
            }
            
        </>
    );
}