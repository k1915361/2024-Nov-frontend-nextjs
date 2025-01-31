import PageComponent from "@/app/pageComponent"
import { Suspense } from "react"
// import FetchDatasetClient from "./fetchDataClient"

export default async function Page({
  params,
}) {  
    const { username, modelname, path } = (await params)
      
    return (
        <PageComponent>
            {username}
            <br/>
            {modelname}
            <br/>
            {path}
            <Suspense>
                {/* <FetchDatasetClient id={id}/> */}
            </Suspense>
        </PageComponent>
    )
}