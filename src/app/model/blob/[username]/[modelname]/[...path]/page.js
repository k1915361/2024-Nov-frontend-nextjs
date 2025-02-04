import { TitleRouteView } from "@/app/dataset/titleRouteView"
import { FileView, getFileExtension } from "@/app/dataset/tree/[id]/[...path]/page"
import { modelBlobBaseRoute } from "@/app/model/tree/[id]/[...path]/page"
import PageComponent from "@/app/pageComponent"

export default async function Page({ params }) {  
    const { username, modelname, path } = (await params)
    const extension = getFileExtension(path[0]);
    const apiRoute = `${username}/${modelname}/${path}`
    
    return (
        <PageComponent>
            <TitleRouteView apiRoute={apiRoute} />
            <FileView extension={extension} apiRoute={apiRoute} apiBaseRoute={modelBlobBaseRoute} />            
        </PageComponent>
    )
}