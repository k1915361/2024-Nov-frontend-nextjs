'use client'

import { API_HTTP } from "../login/fetchData";
import { TitleRouteView } from "./titleRouteView";
import { ifLoadingOrErrorDisplay, useFetch } from "../_components/useFetch";
import { DataSizeAndDownloadIcon, fileIcon, FileListItemContainer, filePathToApiUrl, folderIcon, FolderListContainer, FolderTreeContainerHeader } from "../_components/components";

export const treeOrBlob = {
    true: 'tree',
    false: 'blob',
}

export const folderOrFileIcon = {
    true: folderIcon,
    false: fileIcon,
}

export default function ViewDirectoryTree({apiRoute, apiRoot=API_HTTP, apiType='dataset', routeTitle}) {
    apiRoute = decodeURIComponent(apiRoute)
    apiRoute = filePathToApiUrl(apiRoute)
    
    const { data: tree, loading, error } = useFetch(`${apiType}/tree/${apiRoute}`)

    const display = ifLoadingOrErrorDisplay(loading, error)
    if (display) return display;

    return (
        <div>
            <TitleRouteView
                apiRoute={apiRoute}
                title={routeTitle}
            />            
            <FolderTreeContainerHeader/>  
            <FolderListContainer>
                {tree?.tree?.map?.((item, index) =>                    
                    <FileListItemContainer
                        apiRoute={apiRoute}
                        baseApiRoute={`${apiType}/${treeOrBlob[item.is_dir]}/`}
                        key={index}
                        itemName={item.name}
                        icon={folderOrFileIcon[item.is_dir]}
                    >
                        {!item.is_dir && 
                            <DataSizeAndDownloadIcon
                                itemSize={item.size}
                            />
                        }
                    </FileListItemContainer>
                )}
            </FolderListContainer>  
        </div>
    )
}
    

