'use client'

import Username from "@/app/_components/username";
import { ifLoadingOrErrorDisplay, useFetchExperimental } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import DatasetForkForm from "./datasetForkForm";
import { useAuth } from "@/app/context/AuthContext";
import DatasetInfo, { DatasetInfoComponent } from "../../action/[id]/datasetInfo";

export default function PageClient({id}) {
    const apiRoute = `dataset/${id}`
    const { user, logOut } = useAuth();

    const { data, loading, error } = useFetchExperimental(apiRoute);

    const display = ifLoadingOrErrorDisplay(loading, error)
    if (display) {
        return display
    }

    if (user.username === data.username) {
        return <div>
            <h2>You already own this dataset.</h2>
            <DatasetInfoComponent data={data}/>
        </div>
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
