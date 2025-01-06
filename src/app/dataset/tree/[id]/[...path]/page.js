import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import { API_DATASET_ROOT } from "@/app/login/fetchData"
import PageComponent from "@/app/page_component"

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

export default async function Page({
    params,
}) {
    const id = (await params).id
    const path = (await params).path.join('/')

    fileExtensions.forEach(fileext => {
        if (path.endsWith(fileext)) {
            return <div>
                --------
                <img src={`${API_DATASET_ROOT}/${id}/${path}/`} />
            </div>
        }
    });

    return (
        <PageComponent>
            <br/>
            {path.endsWith('.yaml') && ' yml '}
            {path.endsWith('.txt') && ' txt '}
            {path.endsWith('.jpg') && ' jpg '}
            {path.endsWith('.jpeg') && ' jpeg '}
            {path.endsWith('.png') && ' png '}
            path: {`${id}/${path}`} 
            <ViewDirectoryTree apiRoute={`${id}/${path}`}/>
            {isText(path) && ' display text '}
            {isImage(path) && 
                <img src={`${API_DATASET_ROOT}/${id}/${path}/`} />
            }
        </PageComponent>
    )
}