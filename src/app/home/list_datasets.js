import { API_VIEW } from "../login/fetchData";
import { ListDatasetItemBody } from "./listDatasetItem";

/** NextJS server side ReferenceError: document is not defined.*/
import "bootstrap/dist/js/bootstrap.bundle.min.js" 

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