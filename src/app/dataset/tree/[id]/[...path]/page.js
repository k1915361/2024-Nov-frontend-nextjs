import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { API_DATASET_ROOT, API_HTTP } from "@/app/login/fetchData"
import PageComponent from "@/app/pageComponent"
import "@/app/dataset/table/styles.css"
import { datasetTreeTextViewBaseRoute } from "../../../blob/text-view/[id]/[...path]/page"
import { redirect } from "next/navigation"
import { TitleRouteView } from "@/app/dataset/titleRouteView"
import ViewTextFileClientSide from "../../../blob/[id]/[...path]/viewTextFileClientSide"
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/serverUtils"

export const imageThumbnailClass = "imageView img-thumbnail"

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
    'jpeg': true,
    'json': true,
}

export const isReadableText = {
    'txt': true,
    'markdown': true,
    'mdown': true,
    'mkdn': true,
    'md': true,
    'readme': true,
    'yaml': true,
    'json': true,
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
    const lastDotIndex = path.lastIndexOf('.')
    if (lastDotIndex === -1) {
        return ""
    }
    return path.slice(lastDotIndex + 1).toLowerCase()
}

export function getFileNameFromPath(path) {
    return path.slice(path.lastIndexOf('/') + 1).toLowerCase()
}

export function arrayLast(array, index=1){
    return array[array.length - index];
};

export function FileView({apiRoute, extension, className, apiBaseRoute='dataset/blob/', apiRoot=API_HTTP, ...props }) {
    if (extension === '') {
        return 
    }

    if (isReadableText[extension]) {
        return (
            <ViewTextFileClientSide 
                apiRoute={`${apiBaseRoute}${apiRoute}`} 
                className={className || borderLightClassName}
                {...props}
            />
        )
    }

    if (isImage[extension]) {
        return (
            <img 
                className={className || imageThumbnailClass} 
                src={`${apiRoot}/${apiRoute}/`} 
                {...props}
            />
        )
    }

    return <div>Unsupported file type: {extension}</div>;    
}

export function filePathToApiUrlServerSide(str) {
    return str.replace('asset/', 'tree/')
}

export const datasetBlobBaseRoute = 'dataset/blob/'

export default async function Page({
    params,
}) {
    const id = (await params).id
    const pathArray = (await params).path
    const path = pathArray.join('/')

    if (isReadmeFile[arrayLast(pathArray).toLowerCase()]) {
        redirect(`/${datasetTreeTextViewBaseRoute}${id}/${path}`)
    } 
    const id_ = `${id}/`.replace('asset/', 'tree/')
    const extension = getFileExtension(path);
    const apiRoute = `${id_}${path}`
    
    return (
        <PageComponent>
            - [id]/[...path]/page - {apiRoute} --
            {isFile[extension] ? 
                <TitleRouteView apiRoute={apiRoute} /> :
                <ViewDirectoryTree apiRoute={apiRoute} apiType="dataset" />
            }
            <FileView extension={extension} apiRoute={apiRoute} apiBaseRoute={datasetBlobBaseRoute} />
        </PageComponent>
    )
}