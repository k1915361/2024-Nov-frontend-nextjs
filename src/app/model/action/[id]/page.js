import PageComponent from "@/app/pageComponent"
import { API_HTTP } from "@/app/login/fetchData"
import { ProgressBarView } from "@/app/dataset/image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { DivActionResponseView } from "@/app/dataset/image/test-async-web-socket-json/action-buttons/page"

export const modelActionBaseRoute = 'model/action/'

export default async function Page(context) {
    const id = (await context.params).id

    return (
        <>
            <PageComponent>
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
                <div>
                    <a href={`${API_HTTP}/dataset/1-20241107_192036-CS_dataset/.csv`} download="data.csv">
                        Download CSV File
                    </a>
                </div>
            </PageComponent>
        </>
    )
}