import PageComponent from "@/app/pageComponent"
import ViewDirectoryTree from "../../directoryTreeView"

export default async function Page({
    params,
}) {
    const id = (await params).id

    return (
        <PageComponent>
            <ViewDirectoryTree apiRoute={id} apiType="dataset"/>
        </PageComponent>
    )
}