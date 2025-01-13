import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { API_DATASET_ROOT } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"
import ViewTextFile from "./viewTextFile"
import "@/app/dataset/table/styles.css"
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/page"
import { datasetTreeTextViewBaseRoute } from "../../text-view/[id]/[...path]/page"
import { redirect } from "next/navigation"
import { TitleRouteView } from "@/app/dataset/titleRouteView"

export const isReadmeFile = {
    'readme.roboflow.txt': true,
    'readme.markdown': true,
    'readme.mdown': true,
    'readme.mkdn': true,
    'readme.md': true,
    'readme.txt': true,
    'readme': true,
    'readme.dataset.txt': true,
}

export const isImage = {
    'png': true,
    'jpg': true,
    'jpeg': true
}

export const isFile = {
    'txt': true,
    'yaml': true,
    'png': true,
    'jpg': true,
    'jpeg': true
}

export const isReadableText = {
    'txt': true,
    'markdown': true,
    'mdown': true,
    'mkdn': true,
    'md': true,
    'readme': true,
    'yaml': true
}

export const isKeyValueTreeMap = {
    'yaml': true,
    'json': true
}

export const isTreeMap = {
    'yaml': true,
    'json': true,
    'xml': true,
}

export const isTextOrMarkdownOrReadme = {
    'txt': true,
    'md': true,
    'readme': true
}

export const isOtherFile = {
    'csv': true,
    'json': true,
    'md': true,
    'readme': true,
    'pdf': true,
    'doc': true,
    'docx': true,
    'html': true,
    'm4a': true,
    'mp3': true,
    'mp4': true,
    'xlsx': true
}

export const isMarkup = {
    'markdown': true,
    'mdown': true,
    'mkdn': true,
    'md': true,
    'textile': true,
    'rdoc': true,
    'org': true,
    'creole': true,
    'mediawiki': true,
    'wiki': true,
    'rst': true,
    'asciidoc': true,
    'adoc': true,
    'asc': true,
    'pod': true,
}

export function getFileExtension(path) {
    return path.slice(path.lastIndexOf('.') + 1).toLowerCase()
}

export function getFileNameFromPath(path) {
    return path.slice(path.lastIndexOf('/') + 1).toLowerCase()
}

export function arrayLast(array, index=1){
    return array[array.length - index];
};

export default async function Page({
    params,
}) {
    const id = (await params).id
    const pathArray = (await params).path
    const path = pathArray.join('/')

    if (isReadmeFile[arrayLast(pathArray).toLowerCase()]) {
        redirect(`/${datasetTreeTextViewBaseRoute}${id}/${path}`)
    } 

    const extension = getFileExtension(path);
    
    return (
        <PageComponent>
            {isFile[extension] && 
                <TitleRouteView apiRoute={`${id}/${path}`} />
            }
            {isReadableText[extension] && 
                <ViewTextFile apiRoute={`${id}/${path}`} className={borderLightClassName}/>
            }
            {isImage[extension] &&
                <img className="imageView img-thumbnail" src={`${API_DATASET_ROOT}/${id}/${path}/`}/>
            }
            {!isFile[extension] &&
                <ViewDirectoryTree apiRoute={`${id}/${path}`}/>
            }
        </PageComponent>
    )
}