'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LoadingMessage, maxint } from "../../../models/pages/pagination";
import { getUrlSearchParams } from "@/app/user/models/pages/paginationClient";

export function PageNavBtn({ href, children, ...props }) {
    return (
        <button 
            className="btn btn-outline-secondary mx-1 mb-1 mt-1"
            {...props}
        >
            {children}
        </button>
    )
}

export function useListPaginationState(route, param, namespace, searchParams, route_per_page = '&per_page=') {
    const local_per_page_param = `${namespace}per_page`
    
    if (!searchParams) {
        return {
            list: [], 
            Pagination_: LoadingMessage
        };
    }

    const initialPage = maxint(searchParams.get(param)) || 1
    const router = useRouter();
    const [currPage, setCurrPage] = useState(initialPage);
    const [list, setList] = useState([]);
    const [pageRange, setPageRange] = useState([]);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [totalPages, setTotalPages] = useState(1); 

    const handleFetchListPage = async (route, page) => {
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

    const updatePage = (pageNum) => {
        searchParams.set(param, pageNum);
        router.push(`?${searchParams.toString()}`, undefined, { shallow: true });
    };
    
    useEffect(() => {
        handleFetchListPage(route, currPage);
        updatePage(currPage)
    }, [currPage]);

    useEffect(() => {
        const local_per_page = maxint(searchParams.get(local_per_page_param)) || 2
        searchParams.set(local_per_page_param, local_per_page)
    })

    const handlePrevious = () => setCurrPage((prevPage) => Math.max(prevPage - 1, 1)) 
    const handleNext = () => setCurrPage((prevPage) => prevPage + 1)

    function Pagination_() { 
        return <Pagination 
            pageRange={pageRange}
            currPage={currPage}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            setCurrPage={setCurrPage}
        />
    }

    return {
        list, setList,
        pageNum: currPage, setPageNum: setCurrPage,
        hasNext, setHasNext,
        hasPrevious, setHasPrevious,
        totalPages, setTotalPages,
        searchParams,
        updatePage,
        handleFetchListPage,
        Pagination_
    };
}

export function ActiveButton({children, isActive='', ...props}) {

    return <button 
        type="button" 
        className={`btn ${isActive && 'active'} me-1 mb-1 mt-1`}
        data-bs-toggle="button" 
        aria-pressed={`${isActive && 'true'}`}
        style={{width: "40px" }}
        {...props}
    >
        {children}
    </button>
}

export function ElipsisIcon({children, text='...', ...props}) {
    return <button 
        className="btn border-0 px-1 me-1 mb-1 mt-1" 
        {...props}
        disabled={true}
    >
        {text}
        {children}
    </button>
}

export function ElipsisIconOrPageButton({page, currPage, setCurrPage}){
    return page === "..." ?
        <ElipsisIcon 
            key={page}
        />
        :
        <ActiveButton
            key={page}
            onClick={() => setCurrPage(page)}
            isActive={page === currPage}
        >
            {page}
        </ActiveButton>
}

export function PageRange({pageRange, currPage, setCurrPage, ...props}){
    return pageRange?.map((page) => 
        <ElipsisIconOrPageButton 
            key={page}
            page={page}
            currPage={currPage}
            setCurrPage={setCurrPage}
            {...props}
        />
    )                
}

export function Pagination({ pageRange, currPage, hasNext, hasPrevious, handlePrevious, handleNext, setCurrPage}) {
    
    return (
        <div>
            <span>
                <PageNavBtn 
                    onClick={handlePrevious}
                    disabled={!hasPrevious}
                >
                    previous
                </PageNavBtn>
                <PageRange 
                    pageRange={pageRange}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                />
                <PageNavBtn 
                    onClick={handleNext}
                    disabled={!hasNext}
                >
                    next
                </PageNavBtn>
            </span>
        </div>
    );
}