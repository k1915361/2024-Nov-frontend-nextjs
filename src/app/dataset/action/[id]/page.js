import PageComponent from "@/app/page_component"
import { ProgressBarView } from "../../image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { ActionResponseView } from "../../image/test-async-web-socket-json/action-buttons/page"
import { TitleRouteView } from "../../titleRouteView"
import { useEffectFetchAndSetState } from "../../tree/[id]/[...path]/viewTextFileClientSide"
import { API_HTTP } from "@/app/login/fetchData"
import DatasetInfo from "./datasetInfo"

export const datasetActionBaseRoute = 'dataset/action/'

export function DivActionResponseView({buttonName, apiRoute, ...props}) {
    return <div>
        <ActionResponseView
            buttonName={buttonName}
            apiRoute={apiRoute}
            {...props}
        />
    </div>
}

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <PageComponent>
            <DatasetInfo id={id}/>
            <DivActionResponseView
                buttonName='Dataset Analysis'
                apiRoute='/dataset/image/test-async-file-stream-json/action-a'
            />
            <ProgressBarView 
                buttonName="Cleaning"
                apiRoute="/dataset/image/action-progress"
            />
            <ProgressBarView 
                buttonName="Enrichment" 
                apiRoute="/dataset/image/action-progress-action-b"
            />
            <ProgressBarView 
                buttonName="Data Curation" 
                apiRoute="/dataset/image/action-progress-action-c"
            />
            <ProgressBarView 
                buttonName="Balancing" 
                apiRoute="/dataset/image/action-progress-action-d"
            />
            <ProgressBarView 
                buttonName="XAI" 
                apiRoute="/dataset/image/action-progress-action-e"
            />
        </PageComponent>
    )
}