'use client'

import { useEffect, useState } from "react";
import dayjs from "@/app/_components/dayjsRelativeTime";
import { fetchData } from "@/app/login/fetchData";
import { LinkText } from "@/app/_components/components";
import { Text2ndarySmall } from "@/app/_components/components";
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
            {list?.map?.((model) => (
                <ButtonLight key={model.id}>
                    <LinkText>{model.name}</LinkText>
                    <Text2ndarySmall> • {dayjs(model.updated).fromNow()}</Text2ndarySmall>
                    <Text2ndarySmall>{model.original_model && ' • forked'}</Text2ndarySmall>
                </ButtonLight>
            ))}

            {list?.length == 0 && 
                <p>No List of User Models available.</p>
            }
            
        </>
    );
}