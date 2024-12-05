'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function usePagination(initialPage = 1) {
    const router = useRouter();
    const [pageNum, setPageNum] = useState(initialPage);

    useEffect(() => {
        const pageFromQuery = parseInt(router.query.page) || initialPage;
        setPageNum(pageFromQuery);
    }, [router.query.page]);

    const setPage = (page) => {
        setPageNum(page);
        router.push({ query: { ...router.query, page } }, undefined, { shallow: true });
    };

    const obj = {
        first: () => setPageNum(1),
        previous: () => setPageNum((prevPage) => Math.max(prevPage - 1, 1)), 
        next: () => setPageNum((prevPage) => prevPage + 1),
        getCurrentPage: () => pageNum,
    };

    return { currentPage: pageNum, setPage, obj };
}