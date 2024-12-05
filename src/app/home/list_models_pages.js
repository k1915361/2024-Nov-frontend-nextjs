'use client'

import dayjs from "@/app/_components/dayjsRelativeTime";
import { ispublic } from "./list_datasets";
import { BodyBorderLightSubtle, FontWeightMedium, isforked, ListModelItem, TextSecondary } from "./list_models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "../login/fetchData";
import Link from 'next/link';

export const API_ROOT = "http://127.0.0.1:8000"
export const API = API_ROOT + "/polls"

export function modelPage(model_page) {
    return `?model_page=${ model_page }`
}

export function initialisePageObj(last) {
    const obj = {}
    obj.next = function (){
        obj.pageNum += 1
    }
    obj.previous = function (){
        obj.pageNum -= 1
    }
    obj.last = last
    return obj
}

export function LinkPageBtn({ href, children, ...props }) {
    return (
        <Link href={href} 
            className="btn btn-outline-secondary btn-sm"
            {...props}
        >
            {children}
        </Link>
    )
}

import { useSearchParams } from 'next/navigation'

export default function ListModelsPages(ctx) {
    const route = `${API}/models/` 
    // const data = fetch(route)
    // const datajson = data.json()
    // const models = datajson.models
    let page_has_previous = true
    let page_has_next = true
    let numPages = 1
    const searchParams = useSearchParams()
    const initialPage = Math.max(parseInt(searchParams.get('model_page')), 1)
    const router = useRouter();
    const [pageNum, setPageNum] = useState(initialPage);
    const [models, setModels] = useState([]);

    useEffect(() => {
        async function f() {
            const data = await fetch(route)
            setModels(data.json().models)
            console.log(models)
            if (data != "Fetch Error" && data != "Fetch Failed. Response not ok"){
            }
        }
        f();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const pageNum_ = params.get("model_page");
        console.log(' pageNum_', pageNum_)
        console.log(' rqp', router)
        const pageFromQuery = parseInt(pageNum_);
    }, [pageNum]);

        useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        params.set('model_page', pageNum);
        router.replace(`?${params.toString()}`, undefined, { shallow: true });
    }, [pageNum, router]);


    const setPage = (page) => {
        setPageNum(page);
        router.push({ query: { ...router?.query, page } }, undefined, { shallow: true });
    };

    const obj = {
        first: () => setPageNum(1),
        previous: () => setPageNum((prevPage) => Math.max(prevPage - 1, 1)), 
        next: () => setPageNum((prevPage) => prevPage + 1),
        getCurrentPage: () => pageNum,
    };
 
    return (
        <div>
            <div>{pageNum}</div>
            <h1>Public Models</h1>
            { models?.map?.((model) => 
                <BodyBorderLightSubtle key={model.id}>
                    <FontWeightMedium>
                        {model.name}
                    </FontWeightMedium>
                    <div>
                        <TextSecondary> 
                            {model.username} 
                        </TextSecondary> 
                        <TextSecondary
                        > • {ispublic(model)}
                        </TextSecondary>
                        <TextSecondary
                        > • { dayjs(model.updated).fromNow() } 
                        </TextSecondary>
                        <TextSecondary
                        > {isforked(model)}
                        </TextSecondary>
                    </div>
                </BodyBorderLightSubtle>
                )
            }
            <div className="pagination">
                <span className="step-links">
                    {page_has_previous &&
                        <>
                            <LinkPageBtn href={modelPage(1)} 
                            >
                                &laquo; first
                            </LinkPageBtn>
                            <LinkPageBtn href={modelPage(pageNum-1)}
                            >
                                previous
                            </LinkPageBtn>
                        </>
                    }
                    <span className="current">
                        Page {pageNum} of {numPages}.
                    </span>
                    {page_has_next &&
                        <>
                            <LinkPageBtn href={modelPage(pageNum+1)}
                            >
                                next
                            </LinkPageBtn>
                            <LinkPageBtn href={modelPage(pageNum+1)}
                            >
                                last &raquo;
                            </LinkPageBtn>
                        </>
                    }
                </span>
            </div>
        </div>
    )
}