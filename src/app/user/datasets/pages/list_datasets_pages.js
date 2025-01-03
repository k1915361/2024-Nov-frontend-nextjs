'use client'

import { API_HTTP } from "../../../login/fetchData";
import { ListDatasetItemBody } from "@/app/home/list_datasets";
import { useListPaginationState } from "../../models/pages/pagination";
import UserOrGuestShowPublic from "../../UserOrGuestShowPublicItemsMessage";

export default function ListDatasetsPages() {
    const route = `${API_HTTP}/user/datasets/page/?dataset_page=`    
    const param = 'dataset_page'
    const namespace = 'dataset_'
    const {list: datasets, Pagination_} = useListPaginationState(route, param, namespace);

    return (
        <div>
            <h1>Datasets</h1>            
            { datasets?.map?.((dataset) =>
                    <ListDatasetItemBody 
                        dataset={dataset} 
                        key={dataset.id}
                    />
                )
            }
            <Pagination_
            />
        </div>
    )
}