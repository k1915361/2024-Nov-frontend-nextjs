'use client'

import { API_HTTP } from "@/app/login/fetchData";

import { useListPaginationState } from "./numberRangePagination";
import { RowGap0 } from "@/app/_components/components";
import { LinkListDatasetItemBody } from "@/app/home/listDatasetItem";

/** @deprecated. 
 * This will be deleted after a git push.
 * ReferenceError: `window` is not defined at `window.location.search`. 
 * */
export default function ListDatasetsPages() {
    const route = `${API_HTTP}/datasets/page/?page=`
    const param = 'page'
    const namespace = ''    
    const searchParams = new URLSearchParams(window.location.search);
    const {list: datasets, Pagination_} = useListPaginationState(route, param, namespace, searchParams);

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
            <Pagination_/>
        </div>
    )
}