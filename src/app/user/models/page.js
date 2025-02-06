import PageComponent from "@/app/pageComponent";
import ListModelsPages from "./pages/list_models_pages";
// import ListDatasetsPages from "./list_datasets_pages";

export default function DatasetsPages() {

    return (
        <PageComponent>
            {/* <ListDatasetsPages /> */}
            <ListModelsPages />
        </PageComponent>
    )
}