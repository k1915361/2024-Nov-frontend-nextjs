import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { API_DATASET_ROOT } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"
import ViewTextFile from "./viewTextFile"
import "@/app/dataset/table/styles.css"
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/page"
import ViewMarkdownFilePage from "../../markdown-view/[id]/[...path]/page"
import { datasetTreeTextViewBaseRoute } from "../../text-view/[id]/[...path]/page"
import { redirect } from "next/navigation"
import { TitleRouteView } from "@/app/dataset/titleRouteView"

export const imageExtensions = ['.jpg', '.jpeg', '.png']
export const fileExtensions = ['.yaml', '.txt', ...imageExtensions]

export function isImage(path) {
    return imageExtensions.some((fileext) => {
        return path.endsWith(fileext);
    });
}

export function isText(path) {
    return path.endsWith('.txt')
}

export function isYaml(path) {
    return path.endsWith('.yaml')
}

export function isMarkdown(path) {
    return (path.endsWith('.md') 
        || path.toLowerCase().includes('readme'))
}

export default async function Page({
    params,
}) {
    const id = (await params).id
    const path = (await params).path.join('/')

    if (isMarkdown(path)) {
        redirect(`/${datasetTreeTextViewBaseRoute}${id}/${path}`)
    } 

    return (
        <PageComponent>
            {(isText(path) 
            || isImage(path) 
            || isYaml(path)) && 
                <TitleRouteView apiRoute={`${id}/${path}`} />
            }
            {(isText(path) 
            || isYaml(path)) && 
                <ViewTextFile apiRoute={`${id}/${path}`} className={borderLightClassName}/>
            }
            {isImage(path) &&
                <img className="imageView img-thumbnail" src={`${API_DATASET_ROOT}/${id}/${path}/`}/>
            }
            {(!isText(path) 
            && !isImage(path) 
            && !isYaml(path)) &&
                <ViewDirectoryTree apiRoute={`${id}/${path}`}/>
            }
        </PageComponent>
    )
}