import ListDatasets from "@/app/home/list_datasets";
import ListModels from "@/app/home/list_models";
import PageComponent from "@/app/pageComponent";

export default function ModelUploadPage() {
    return (
        <PageComponent>
            <ListModels/>
            <ListDatasets/>
        </PageComponent>
    )
}