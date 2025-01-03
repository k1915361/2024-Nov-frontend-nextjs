import PageComponent from "@/app/page_component"
import { Suspense } from "react"
import FetchDatasetClient from "./fetchDataClient"

export default async function Page({
  params,
}) {  
    const id = (await params).id
  
    return (
        <PageComponent>
            <Suspense>
                <FetchDatasetClient id={id}/>
            </Suspense>
        </PageComponent>
    )
}