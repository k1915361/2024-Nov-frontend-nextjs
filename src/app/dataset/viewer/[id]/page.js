import PageComponent from "@/app/page_component"
import DatasetInfoAndCsvView from "../../action/[id]/datasetInfoAndCsvView"

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <PageComponent>
            <DatasetInfoAndCsvView id={id} />
        </PageComponent>
    )
}