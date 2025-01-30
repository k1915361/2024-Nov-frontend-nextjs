'use client'

import { useAuth } from "@/app/context/AuthContext";
import PageComponent from "@/app/page_component";
import { UsernameAndModelNameLinks } from "./component";
import { ifLoadingOrErrorDisplay, useFetch } from "@/app/_components/useFetch";

export default function ModelPageClient({id}) {
    const apiRoute = `model/${id}`
    const { user } = useAuth();
    const { data, loading, error } = useFetch(apiRoute);

    const display = ifLoadingOrErrorDisplay(loading, error)
    if (display) {
        return display
    }

    if (user.username === data.username) {
        return <PageComponent>
            <h2>You already own this model.</h2>
            <UsernameAndModelNameLinks 
                data={data} 
                id={id}
            />
            <ModelInfoComponent 
                data={data}
            />
        </PageComponent>
    }

    return (
        <>
            <UsernameAndModelNameLinks 
                data={data} 
                id={id}
            />
        </>
    )
}
