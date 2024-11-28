import ListDatasets from "@/app/homepage/list_datasets";
import ListModels from "@/app/homepage/list_models";
import PageComponent from "@/app/page_component";

export default function ModelUploadPage() {
    return (
        <PageComponent>
            <ListModels/>
            <ListDatasets/>
        </PageComponent>
    )
}