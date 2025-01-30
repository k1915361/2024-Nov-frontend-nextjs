import ViewDirectoryTree from "@/app/dataset/directoryTreeView"
import PageComponent from "@/app/page_component"

export default async function Page({
    params,
}) {
    const id = (await params).id

    return (
        <PageComponent>
            <ViewDirectoryTree apiRoute={id} apiType="model"/>
        </PageComponent>
    )
}