import PageComponent from "@/app/page_component";
import { getFileExtension, isReadableText } from "../../../../tree/[id]/[...path]/page"
import { LinkButtonLight } from "@/app/user/models/page";
import ViewTextFile from "../../../[id]/[...path]/viewTextFile";
import { TitleRouteView } from "@/app/dataset/titleRouteView";
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/serverUtils";

export const datasetTreeBaseRoute = 'dataset/tree/'
export const datasetTreeMarkdownViewBaseRoute = `${datasetTreeBaseRoute}markdown-view/`
export const datasetTreeTextViewBaseRoute = `${datasetTreeBaseRoute}text-view/`

export default async function ViewMarkdownFilePage({
    params,
}) {
    const id = (await params).id
    const path = (await params).path.join('/')
    const extension = getFileExtension(path);

    if (!isReadableText[extension]) {
        return <div>This file is not a readable text, readme, or markdown file.</div> 
    }

    return (
        <PageComponent>
            <TitleRouteView apiRoute={`${id}/${path}`} />            
            <ViewTextFile apiRoute={`${id}/${path}`} className={borderLightClassName}/>
            <LinkButtonLight href={`/${datasetTreeMarkdownViewBaseRoute}${id}/${path}`}>
                Markdown view
            </LinkButtonLight>
        </PageComponent>
    )
}