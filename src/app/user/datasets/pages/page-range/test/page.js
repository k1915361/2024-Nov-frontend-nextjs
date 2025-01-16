'use client'

import { API_HTTP } from "@/app/login/fetchData"
import { maxint, minint } from "@/app/user/models/pages/pagination"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { PageRange } from "../numberRangePagination"
import { RowGap0 } from "../../../page"
import { LinkListDatasetItemBody } from "@/app/home/list_datasets"
import PageComponent from "@/app/page_component"

const handleFetchListPage = async (searchParams, route, page, setList, setPageRange, setHasNext, setHasPrevious, setTotalPages, local_per_page_param = 'dataset_per_page', route_per_page = '&per_page=') => {
    const global_per_page = maxint(searchParams.get('per_page')) || 2
    const local_per_page = maxint(searchParams.get(local_per_page_param)) || global_per_page
    const response = await fetch(
        `${route}${page}${route_per_page}${global_per_page}&${local_per_page_param}=${local_per_page}`
        ,{
            method: 'GET',
            credentials: 'include',
        }
    );
    const data = await response.json()
    
    setList(data.list)
    setPageRange(data.page_range)
    setHasNext(data.page_has_next)
    setHasPrevious(data.page_has_previous)
    setTotalPages(data.num_pages)
}

/** Example of search parameter using Next's navigation */
export default function ExampleClientComponent() {
    const route = `${API_HTTP}/datasets/page/?page=`
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const per_page = maxint(searchParams.get('per_page'))
    const page = maxint(searchParams.get('page'))
    const [list, setList] = useState([])
    
    const [pageRange, setPageRange] = useState([]);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [totalPages, setTotalPages] = useState(1); 

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            
            return params.toString()
        },
        [searchParams]
    )

    useEffect(() => {
        handleFetchListPage(searchParams, route, page, setList, setPageRange, setHasNext, setHasPrevious, setTotalPages)
    }, [page])

    const goNextPage = pathname + '?' + createQueryString('page', maxint(page - 1))
    const goPreviousPage = pathname + '?' + createQueryString('page', minint(page + 1, totalPages))
    
    function setPage(page) {
        router.push(pathname + '?' + createQueryString('page', maxint(page)))
    }
    
    return (
        <PageComponent>        
        <div>
            <RowGap0>
                {list?.map?.((dataset) => 
                    <LinkListDatasetItemBody 
                        dataset={dataset} 
                        key={dataset.id}
                    />
                )}
            </RowGap0>
        </div>

        <span>
            <Link 
                href={goNextPage} 
                className="btn btn-outline-secondary  mx-1 mb-1"
                disabled={!hasPrevious}
            >
                Previous
            </Link> 

            <PageRange 
                pageRange={pageRange}
                currPage={page}
                setCurrPage={setPage}
            />
            
            <Link 
                href={goPreviousPage} 
                className="btn btn-outline-secondary  mx-1 mb-1"
                disabled={!hasNext}
            >
                Next
            </Link>
        </span>
        </PageComponent>
    )
}