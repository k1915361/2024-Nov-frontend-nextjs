import { arrayLast, datasetBlobBaseRoute, FileView, getFileExtension, isCSV, isFile, isReadmeFile } from "@/app/dataset/tree/[id]/[...path]/page"
import PageComponent from "@/app/pageComponent"
import { TitleRouteView } from "@/app/dataset/titleRouteView"
import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { redirect } from "next/navigation"

export const datasetBlobTextViewBaseRoute = 'dataset/blob/text-view/'
export const datasetBlobBase = 'dataset/blob'

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
    let apiBaseRoute = datasetBlobBaseRoute

    if (extension == 'csv') {
        apiBaseRoute = 'dataset/'
    }

    return (
        <PageComponent>
            {isFile[extension] ? 
                <TitleRouteView 
                    apiRoute={apiRoute} 
                    routeType="dataset"
                /> 
                :
                <ViewDirectoryTree 
                    apiRoute={apiRoute} 
                    apiType="dataset"
                />
            }
            <FileView 
                extension={extension} 
                apiRoute={apiRoute} 
                apiBaseRoute={apiBaseRoute} 
            />
        </PageComponent>
    )
}