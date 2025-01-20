import PageComponent from "@/app/page_component"
import { API_HTTP } from "@/app/login/fetchData"
import DatasetInfo from "../../action/[id]/datasetInfo"
import DatasetCsvView from "../../action/[id]/datasetCsvView"

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <PageComponent>
            <DatasetInfo id={id}/>
            <DatasetCsvView id={id}/>
        </PageComponent>
    )
}