'use client'

import DatasetForkForm from "./datasetForkForm";
import { useAuth } from "@/app/context/AuthContext";
import { DatasetInfoComponent } from "../../action/[id]/datasetInfo";
import { ifLoadingOrErrorDisplay, useFetch } from "@/app/_components/useFetch";
import { UsernameAndModelNameLinks } from "@/app/model/fork/[id]/component";
import PageComponent from "@/app/page_component";

export default function DatasetPageClient({id}) {
    const apiRoute = `dataset/${id}`
    const { user } = useAuth();

    const { data, loading, error } = useFetch(apiRoute);

    const display = ifLoadingOrErrorDisplay(loading, error)
    if (display) {
        return display
    }

    if (user.username === data.username) {
        return <PageComponent>
            <h2>You already own this dataset.</h2>
            <DatasetInfoComponent data={data}/>
        </PageComponent>
    }

    return (
        <>
            <UsernameAndModelNameLinks 
                data={data}
                id={id}
            />
            <PageComponent>
                <DatasetForkForm 
                    dataset_id={id} 
                    dataset={data}
                    loggedInUser={user?.username}
                />            
            </PageComponent>
        </>
    )
}
