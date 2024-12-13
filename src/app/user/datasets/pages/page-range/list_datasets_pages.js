'use client'

import { API } from "@/app/login/fetchData";

import { useListPaginationState } from "./numberRangePagination";
import { LinkListDatasetItemBody } from "@/app/home/list_datasets";
import { RowGap0 } from "@/app/user/datasets/page";

export default function ListDatasetsPages() {
    const route = `${API}/datasets/page/?page=`
    const param = 'page'
    const namespace = ''
    const {list: datasets, Pagination_} = useListPaginationState(route, param, namespace);

    return (
        <div>
            <h1>Datasets</h1>
            <RowGap0>
                { datasets?.map?.((dataset) => 
                        <LinkListDatasetItemBody 
                            dataset={dataset} 
                            key={dataset.id}
                        />
                    )
                }
            </RowGap0>
            <Pagination_
            />
        </div>
    )
}