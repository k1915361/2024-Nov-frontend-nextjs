import { POLLS_API_URL } from "../login/fetchData";
import { ListDatasetItemCard } from "./listDatasetItem";

/** NextJS server side ReferenceError: document is not defined.*/
import "bootstrap/dist/js/bootstrap.bundle.min.js" 

export default async function ListDatasets({  }) {
    const data = await fetch(`${POLLS_API_URL}/datasets/`)
    const datajson = await data.json()
    const datasets = datajson.datasets

    return (
        <div>
            <h1>Public Datasets</h1>
            { datasets.map((dataset) => 
                <ListDatasetItemCard 
                    dataset={dataset} 
                    key={dataset.id}
                />
                )
            }
        </div>
    )
}