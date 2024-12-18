import ListDatasets from "@/app/home/list_datasets";
import ListModels from "@/app/home/list_models";
import PageComponent from "@/app/page_component";

export default function ModelUploadPage() {
    return (
        <PageComponent>
            <ListModels/>
            <ListDatasets/>
        </PageComponent>
    )
}