import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function PageNavBtn({ href, children, ...props }) {
    return (
        <button href={href} 
            className="btn btn-outline-secondary btn-sm"
            {...props}
        >
            {children}
        </button>
    )
}

export function getUrlSearchParams() {
    return new URLSearchParams(window.location.search)
}

export function maxint(num, min=1) {
    return Math.max(parseInt(num), min)
}

export function LoadingMessage() {
    return <div>Loading...</div>
}

export function useListPaginationState(route, param, namespace, route_per_page = '&per_page=') {
    const local_per_page_param = `${namespace}per_page`
    const searchParams = getUrlSearchParams()
    
    if (!searchParams) {
        return {
            list: [], 
            Pagination_: LoadingMessage
        };
    }

    const initialPage = maxint(searchParams.get(param))
    const router = useRouter();
    const [pageNum, setPageNum] = useState(initialPage);
    const [list, setList] = useState([]);
    const [hasNext, setHasNext] = useState(false);
    const [hasPrevious, setHasPrevious] = useState(false);
    const [totalPages, setTotalPages] = useState(1); 

    const handleFetchListPage = async (route, page) => {
        const global_per_page = maxint(searchParams.get('per_page')) || 2
        const local_per_page = maxint(searchParams.get(local_per_page_param)) || global_per_page
        const response = await fetch(
            `${route}${page}${route_per_page}${global_per_page}&${local_per_page_param}=${local_per_page}`
        );
        const data = await response.json()

        setList(data.list)
        setHasNext(data.page_has_next)
        setHasPrevious(data.page_has_previous)
        setTotalPages(data.paginator_num_pages)
    }

    const updatePage = (pageNum) => {
        searchParams.set(param, pageNum);
        router.push(`?${searchParams.toString()}`, undefined, { shallow: true });
    };
    
    useEffect(() => {
        handleFetchListPage(route, pageNum);
        updatePage(pageNum)
    }, [pageNum]);

    const handleFirst = () => setPageNum(1)
    const handlePrevious = () => setPageNum((prevPage) => Math.max(prevPage - 1, 1)) 
    const handleNext = () => setPageNum((prevPage) => prevPage + 1)
    const handleLast = () => setPageNum(totalPages)

    function Pagination_() { 
        return <Pagination 
            pageNum={pageNum}
            totalPages={totalPages}
            hasNext={hasNext}
            hasPrevious={hasPrevious}
            handleFirst={handleFirst}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleLast={handleLast}
        />
    }

    return {
        list, setList,
        pageNum, setPageNum,
        hasNext, setHasNext,
        hasPrevious, setHasPrevious,
        totalPages, setTotalPages,
        searchParams,
        updatePage,
        handleFetchListPage,
        Pagination_
    };
}

export function Pagination({ pageNum, totalPages, hasNext, hasPrevious, handleFirst, handlePrevious, handleNext, handleLast}) {
    return (
    <div className="pagination">
        <span className="step-links">
            <PageNavBtn 
                onClick={handleFirst}
                disabled={!hasPrevious}
            >
                &laquo; first
            </PageNavBtn>
            <PageNavBtn 
                onClick={handlePrevious}
                disabled={!hasPrevious}
            >
                previous
            </PageNavBtn>
            <span className="current">
                Page {pageNum} of {totalPages}.
            </span>
            <PageNavBtn 
                onClick={handleNext}
                disabled={!hasNext}
            >
                next
            </PageNavBtn>
            <PageNavBtn 
                onClick={handleLast}
                disabled={!hasNext}
            >
                last &raquo;
            </PageNavBtn>
        </span>
    </div>
    );
}