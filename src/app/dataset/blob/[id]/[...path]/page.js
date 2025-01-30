import { arrayLast, datasetBlobBaseRoute, FileView, getFileExtension, isFile, isReadmeFile } from "@/app/dataset/tree/[id]/[...path]/page"
import { datasetTreeTextViewBaseRoute } from "../../text-view/[id]/[...path]/page"
import PageComponent from "@/app/page_component"
import { TitleRouteView } from "@/app/dataset/titleRouteView"
import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { redirect } from "next/navigation"

export const datasetBlobTextViewBaseRoute = 'dataset/blob/text-view/'

export default async function Page({
    params,
}) {
    const id = (await params).id
    const pathArray = (await params).path
    const path = pathArray.join('/')

    if (isReadmeFile[arrayLast(pathArray).toLowerCase()]) {
        redirect(`/${datasetBlobTextViewBaseRoute}${id}/${path}`)
    } 
    const id_ = `${id}/`.replace('asset/', 'tree/')
    const extension = getFileExtension(path);
    const apiRoute = `${id_}${path}`
    
    return (
        <PageComponent>
            {isFile[extension] ? 
                <TitleRouteView apiRoute={apiRoute} /> :
                <ViewDirectoryTree apiRoute={apiRoute} apiType="dataset"/>
            }
            <FileView extension={extension} apiRoute={apiRoute} apiBaseRoute={datasetBlobBaseRoute} />
        </PageComponent>
    )
}