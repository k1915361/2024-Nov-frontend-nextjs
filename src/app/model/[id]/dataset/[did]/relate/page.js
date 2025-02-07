import { BoldHeading4 } from "@/app/_components/components";
import { ListModelItemCard } from "@/app/home/list_models";
import { ListDatasetItemCard } from "@/app/home/listDatasetItem";
import { API_HTTP } from "@/app/login/fetchData";
import PageComponent from "@/app/pageComponent"
import { Suspense } from "react"
import ModelDatasetRelateForm from "./modelDatasetRelateForm";

export default async function Page({ params }) {
    const {id, did} = (await params)
    const response = await fetch(`${API_HTTP}/model/${id}/`);
    const model = await response.json()
    const response_ = await fetch(`${API_HTTP}/dataset/${did}/`);
    const dataset = await response_.json()

    return (
        <PageComponent>
            <BoldHeading4>
                Make a Model-Dataset relationship
            </BoldHeading4>
            <ListModelItemCard model={model} />
            <ListDatasetItemCard dataset={dataset}/>
            <Suspense>
                <ModelDatasetRelateForm
                    dataset_id={dataset.id}
                    model_id={model.id}
                />
            </Suspense>
        </PageComponent>
    )
}