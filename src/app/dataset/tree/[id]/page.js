import { API_DATASET_ROOT } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"
import ViewDirectoryTree from "../../directoryTreeView"


export default async function Page({
    params,
}) {
    const id = (await params).id

    return (
        <PageComponent>
            <ViewDirectoryTree apiRoute={id}/>
        </PageComponent>
    )
}