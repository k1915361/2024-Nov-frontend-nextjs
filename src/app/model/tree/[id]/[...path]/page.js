import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { TitleRouteView } from "@/app/dataset/titleRouteView"
import { arrayLast, FileView, getFileExtension, isFile, isReadmeFile } from "@/app/dataset/tree/[id]/[...path]/page"
import PageComponent from "@/app/page_component"
import { redirect } from "next/navigation"

export const modelTreeBaseRoute = 'model/tree/'
export const modelBlobBaseRoute = 'model/blob/'
export const modelTreeMarkdownViewBaseRoute = `${modelTreeBaseRoute}markdown-view/`
export const modelTreeTextViewBaseRoute = `${modelTreeBaseRoute}text-view/`

export default async function Page({
    params,
}) {
    const id = (await params).id
    const pathArray = (await params).path
    const path = pathArray.join('/')

    if (isReadmeFile[arrayLast(pathArray).toLowerCase()]) {
        redirect(`/${modelTreeTextViewBaseRoute}${id}/${path}`)
    } 
    const id_ = `${id}/`.replace('asset/', 'tree/')
    const extension = getFileExtension(path);
    const apiRoute = `${id_}${path}`
    
    return (
        <PageComponent>          
            {isFile[extension] ? 
                <TitleRouteView apiRoute={apiRoute} title="Models: "/> :
                <ViewDirectoryTree apiRoute={apiRoute} routeTitle="Models: " apiType="model"/>
            }
            <FileView extension={extension} apiRoute={apiRoute} apiBaseRoute={modelBlobBaseRoute}/>
        </PageComponent>
    )
}