'use client'

import { API_HTTP } from "@/app/login/fetchData"
import { maxint, minint } from "@/app/user/models/pages/pagination"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { PageRange } from "../numberRangePagination"
import { RowGap0 } from "@/app/_components/components"
import { LinkListDatasetItemBody } from "@/app/home/listDatasetItem"

const handleFetchListPage = async (
    searchParams, 
    route, 
    page, 
    setList, 
    setPageRange, 
    setHasNext, 
    setHasPrevious, 
    setTotalPages, 
    per_page=2, 
    local_per_page=2, 
    local_per_page_param = 'dataset_per_page', 
    route_per_page = '&per_page='
) => {
    local_per_page = maxint(searchParams.get(local_per_page_param)) || per_page
    const response = await fetch(
        `${route}${page}${route_per_page}${per_page}&${local_per_page_param}=${local_per_page}`
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

function ButtonLightShadowOutline({disabled, href, children, ...props}) {
    return <Link 
        href={href} 
        {...props}
        className={`btn btn-light shadow-sm mx-1 text-dark ${disabled && 'disabled'}`}
    >
        {children}
    </Link>
}

/** Example of search parameter using Next's navigation */
export default function DatasetPageRange({namespace='datasets', LinkListItemBody=LinkListDatasetItemBody}) {
    const route = `${API_HTTP}/${namespace}/page/?page=`
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const per_page = maxint(searchParams.get('per_page')) || 2
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
        handleFetchListPage(searchParams, route, page, setList, setPageRange, setHasNext, setHasPrevious, setTotalPages, per_page)
    }, [page])

    const goPreviousPage = pathname + '?' + createQueryString('page', maxint(page - 1))
    const goNextPage = pathname + '?' + createQueryString('page', minint(page + 1, totalPages))
    
    function setPage(page) {
        router.push(pathname + '?' + createQueryString('page', maxint(page)))
    }
    
    return (
        <div>
            <div>
                <RowGap0>
                    {list?.map?.((dataset) => 
                        <LinkListItemBody 
                            dataset={dataset} 
                            key={dataset.id}
                        />
                    )}
                </RowGap0>
            </div>

            <div>
                <span>
                    <ButtonLightShadowOutline 
                        disabled={!hasPrevious}
                        href={goPreviousPage} 
                    >
                        Previous
                    </ButtonLightShadowOutline>
                    <PageRange 
                        pageRange={pageRange}
                        currPage={page}
                        setCurrPage={setPage}
                    />
                    <ButtonLightShadowOutline 
                        disabled={!hasNext}
                        href={goNextPage} 
                    >
                        Next
                    </ButtonLightShadowOutline>
                </span>
            </div>
        </div>
    )
}