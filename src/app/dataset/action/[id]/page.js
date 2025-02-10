import PageComponent from "@/app/pageComponent"
import { ProgressBarView } from "../../image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { DivActionResponseView } from "../../image/test-async-web-socket-json/action-buttons/page"
import DatasetInfo from "./datasetInfo"
import { API_HTTP } from "@/app/login/fetchData"
import DatasetCsvView from "./datasetCsvView"
import { Text2ndarySmall } from "@/app/_components/components"

export const datasetActionBaseRoute = 'dataset/action/'

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
                type='cleaning'
                parameters={{ 'paramA': 'cleaning_valueA' }}
            />
            <ProgressBarView 
                buttonName="Enrichment" 
                apiRoute="/dataset/image/action-progress-action-b"
                type='enrichment'
                parameters={{ 'paramA': 'enrichment_valueB' }}
            />
            <ProgressBarView 
                buttonName="Data Curation" 
                apiRoute="/dataset/image/action-progress-action-c"
                type='data_curation'
                parameters={{ 'paramA': 'data_curation_valueC' }}
            />
            <ProgressBarView 
                buttonName="Balancing" 
                apiRoute="/dataset/image/action-progress-action-d"
                type='balancing'
                parameters={{ 'paramA': 'balancing_valueD' }}
            />
            <Text2ndarySmall>
                Explainable AI (XAI)
            </Text2ndarySmall>
            <div>
            </div>
            <ProgressBarView 
                buttonName="XAI" 
                apiRoute="/dataset/image/action-progress-action-e"
            />
            <div>
                <a href={`${API_HTTP}/dataset/1-20241107_192036-CS_dataset/.csv`} download="data.csv">
                    Download CSV File
                </a>
            </div>
            <DatasetCsvView id={id}/>
        </PageComponent>
    )
}