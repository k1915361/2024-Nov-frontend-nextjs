'use client'

import { useAuth } from "@/app/context/AuthContext";
import { ifLoadingOrErrorDisplay, useFetchExperimental } from "@/app/dataset/tree/[id]/[...path]/viewTextFileClientSide";
import ModelForkForm from "./modelForkForm";
import PageComponent from "@/app/page_component";
import { UsernameAndDatasetNameLinks } from "./component";

export function ModelInfoComponent({data}) { 
    return (
        <>
            <h1>
                Model: {data?.name}
            </h1>
            <h6>
                User: {data?.username}
            </h6>
            <div>
                Directory: {data?.model_directory}
            </div>
        </>
    )
}

export function isEmptyObjectCheckForEach(obj) {
    for (var i in obj)
        return false;
    return true;
}

export function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
}

export default function PageClient({id}) {
    const apiRoute = `model/${id}`
    const { user } = useAuth();

    const { data, loading, error } = useFetchExperimental(apiRoute);

    const display = ifLoadingOrErrorDisplay(loading, error)
    if (display) {
        return display
    }

    if (user.username === data.username) {
        return <PageComponent>
            <h2>You already own this model.</h2>
            <UsernameAndDatasetNameLinks data={data} />
            <ModelInfoComponent data={data}/>
        </PageComponent>
    }

    return (
        <div >
            <UsernameAndDatasetNameLinks 
                data={data} 
                id={id}
            />
            <PageComponent>
                place content here
                <ModelForkForm 
                    model_id={id} 
                    model={data}
                    loggedInUser={!isEmptyObject(user)}
                />
            </PageComponent>
            <div className="container">
            </div>
        </div>
    )
}
