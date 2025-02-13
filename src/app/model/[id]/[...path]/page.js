import PageComponent from "@/app/pageComponent"
import { Suspense } from "react"
// import FetchDatasetClient from "./fetchDataClient"

export default async function Page({
  params,
}) {  
    const { id, path } = (await params)
      
    return (
        <PageComponent>
            {id}
            <br/>
            {path}
            <Suspense>
                {/* <FetchDatasetClient id={id}/> */}
            </Suspense>
        </PageComponent>
    )
}