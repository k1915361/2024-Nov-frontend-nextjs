import { API_DATASET_ROOT } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"
import { Suspense } from "react"
import ViewDirectoryTree from "../../directoryTreeView"


export default async function Page({
    params,
}) {
    const id = (await params).id

    return (
        <PageComponent>
            id: {id}
            : {`${API_DATASET_ROOT}/${id}`}
                <ViewDirectoryTree apiRoute={id}/>
        </PageComponent>
    )
}