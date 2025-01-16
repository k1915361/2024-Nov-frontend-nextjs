'use client'

import { API_HTTP } from "@/app/login/fetchData";

import { Pagination, useListPaginationState } from "./numberRangePagination";
import { LinkListDatasetItemBody } from "@/app/home/list_datasets";
import { RowGap0 } from "@/app/user/datasets/page";
// import { getUrlSearchParams } from "@/app/user/models/pages/paginationClient";
import { useEffect, useState } from "react";

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