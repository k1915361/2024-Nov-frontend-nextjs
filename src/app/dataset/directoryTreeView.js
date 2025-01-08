'use client'

import { useEffect, useState } from "react";
import { Icon } from "../_components/sidebar";
import { API_DATASET_ROOT } from "../login/fetchData";
import { datasetTreeBaseRoute } from "./tree/text-view/[id]/[...path]/page";
import { TitleRouteView } from "./titleRouteView";

export function getDirectoryTree(api, setState) {
    async function f() {
        const response = await fetch(api, {})
        if (!response.ok) {
            console.log('Response not ok', response);
            return 
        }
        setState(await response.json())
    }
    f();
}

export const fileIcon = <svg 
        className="flex-none mr-2 text-gray-300 fill-current" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        aria-hidden="true" 
        focusable="false" 
        role="img" 
        width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"
    >
        <path d="M25.7 9.3l-7-7A.908.908 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.908.908 0 0 0-.3-.7zM18 4.4l5.6 5.6H18zM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6z" fill=""></path>
    </svg>

export const folderIcon = <svg 
        className="flex-none mr-2 text-blue-400 fill-current" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        aria-hidden="true" 
        focusable="false" 
        role="img" 
        width="1em" 
        height="1em" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 24 24"
    >
        <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="currentColor"></path>
    </svg>

export function FileRouteView({apiRoute, filename, children, baseApiRoute=datasetTreeBaseRoute, icon = folderIcon, target='_blank', className='dir', ...props}) {
    return (
        <a href={`/${baseApiRoute}${apiRoute}/${filename}`} target={target} className={className} {...props}>
            {icon} {filename} {children}
        </a>
    )
}

export default function ViewDirectoryTree({apiRoute, apiRoot=API_DATASET_ROOT, }) {
    const [tree, setTree] = useState({});

    useEffect(() => {
        getDirectoryTree(`${apiRoot}/${apiRoute}`, setTree);
    }, [])

    return (
        <div>
            <TitleRouteView
                apiRoute={apiRoute}
            />
            <div className="list-group mb-1" >
                {tree?.tree?.map?.((item, index) => 
                    item.is_dir 
                    ?
                        <div key={index} className="tree-item list-group-item">
                            <FileRouteView
                                apiRoute={apiRoute}
                                filename={item.name}
                                icon={folderIcon}
                            />
                        </div>
                    :
                        <div key={index} className="tree-item list-group-item">
                            <FileRouteView
                                apiRoute={apiRoute}
                                filename={item.name}
                                icon={fileIcon}
                            >
                                {item.size} B
                            </FileRouteView>
                        </div>               
                )}
            </div>
        </div>
    )
}