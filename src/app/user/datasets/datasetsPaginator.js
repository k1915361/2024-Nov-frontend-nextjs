'use client'

import { LinkListDatasetItemBody } from "@/app/home/list_datasets";
import { useListPaginationState } from "../models/pages/pagination";
import { API_HTTP } from "@/app/login/fetchData";

export default function DatasetsPaginator() {
    const route = `${API_HTTP}/user/datasets/page/?dataset_page=`
    const param = 'dataset_page'
    const namespace = 'dataset_'
    const {list: datasets, Pagination_} = useListPaginationState(route, param, namespace);

    return (
        <>
            { datasets?.map?.((dataset) => 
                <LinkListDatasetItemBody
                    dataset={dataset} 
                    key={dataset.id}
                />
                )
            }
            <Pagination_/>
        </>
    )
}