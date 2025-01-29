'use client'

import { ifLoadingOrErrorDisplay, useFetchExperimental } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import DatasetForkForm from "./datasetForkForm";
import { useAuth } from "@/app/context/AuthContext";
import { DatasetInfoComponent } from "../../action/[id]/datasetInfo";

export default function PageClient({id}) {
    const apiRoute = `dataset/${id}`
    const { user } = useAuth();

    const { data, loading, error } = useFetchExperimental(apiRoute);

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
            <h5>
                Dataset from owner: {data.username}
            </h5>
            <DatasetForkForm 
                dataset_id={id} 
                dataset={data}
            />            
        </>
    )
}
