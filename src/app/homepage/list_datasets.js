import dayjs from "@/app/_components/dayjsRelativeTime";
import { TextSecondary } from "./list_models";

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

const API_ROOT = "http://127.0.0.1:8000"
const API = API_ROOT + "/polls"

export default async function ListDatasets({  }) {
    const data = await fetch(`${API}/datasets/`)
    const datajson = await data.json()
    const datasets = datajson.datasets

    return (
        <div>
            <h1>Public Datasets</h1>
            { datasets.map((dataset) => 
                <div key={dataset.id} className="p-1 my-1 bg-body rounded border border-light-subtle ">
                    <div className="fw-medium">
                        {dataset.name}
                    </div>
                    <div>
                        <TextSecondary>
                            {dataset.username} 
                        </TextSecondary>
                        <TextSecondary
                        > • {ispublic(dataset)}
                        </TextSecondary>
                        <TextSecondary
                        > • {dayjs(dataset.updated).fromNow() } 
                        </TextSecondary>
                        <TextSecondary
                        > {isforked(dataset)}
                        </TextSecondary>
                    </div>
                </div>
                )
            }
        </div>
    )
}