import dayjs from "@/app/_components/dayjsRelativeTime";
import { BodyBorderLightSubtle, FontWeightMedium, TextSecondary } from "./list_models";
import { API_VIEW } from "../login/fetchData";

export function isforked(dataset, prefix=" • ") {
    if (dataset.original_dataset) { 
        return prefix + "forked"
    }
}

export function ispublic(dataset) {
    if (dataset.is_public) { 
        return "public"
        
    } else {
        return "private"
    }
}

export function ListDatasetItem({dataset}) {
    return <>
        <FontWeightMedium>
            {dataset.name}
        </FontWeightMedium>
        <div>
            <TextSecondary> 
                {dataset.username} 
            </TextSecondary> 
            <TextSecondary
            > • {ispublic(dataset)}
            </TextSecondary>
            <TextSecondary
            > • {dayjs(dataset.updated).fromNow()} 
            </TextSecondary>
            <TextSecondary
            > {isforked(dataset)}
            </TextSecondary>
        </div>
    </>
}

export function ListDatasetItemBody({dataset}) {
    return <BodyBorderLightSubtle key={dataset.id}>
        <ListDatasetItem dataset={dataset}/>
    </BodyBorderLightSubtle>
}

export default async function ListDatasets({  }) {
    const data = await fetch(`${API_VIEW}/datasets/`)
    const datajson = await data.json()
    const datasets = datajson.datasets

    return (
        <div>
            <h1>Public Datasets</h1>
            { datasets.map((dataset) => 
                <ListDatasetItemBody 
                    dataset={dataset} 
                    key={dataset.id}
                />
                )
            }
        </div>
    )
}