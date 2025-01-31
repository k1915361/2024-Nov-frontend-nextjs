import PageComponent from "@/app/pageComponent";
import ListDatasetsPages from "../../datasets/pages/list_datasets_pages";
import ListModelsPages from "../../models/pages/list_models_pages";
import UserOrGuestShowPublic from "../../UserOrGuestShowPublicItemsMessage";

export default function DatasetsPages() {

    return (
        <PageComponent>
            <UserOrGuestShowPublic
            > datasets and models
            </UserOrGuestShowPublic> 
            <ListDatasetsPages/>
            <ListModelsPages/>
        </PageComponent>
    )
}