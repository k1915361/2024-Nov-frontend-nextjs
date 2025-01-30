'use client'

import { useAuth } from "@/app/context/AuthContext";
import ModelForkForm from "./modelForkForm";
import PageComponent from "@/app/page_component";
import { UsernameAndModelNameLinks } from "./component";
import { ifLoadingOrErrorDisplay, useFetch } from "@/app/_components/useFetch";

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

export default function ModelForkPageClientSide({id}) {
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
            <ModelInfoComponent data={data}/>
        </PageComponent>
    }

    return (
        <div>
            <UsernameAndModelNameLinks 
                data={data} 
                id={id}
            />
            <PageComponent>
                <ModelForkForm 
                    model_id={id} 
                    model={data}
                    loggedInUser={user?.username}
                />
            </PageComponent>
            <div className="container">
            </div>
        </div>
    )
}
