'use client'

import { ListModelItemBody } from "../../../home/list_models";
import { API } from "../../../login/fetchData";
import { useListPaginationState } from "./pagination";

export default function ListModelsPages() {
    const route = `${API}/user/models/page/?model_page=`
    const param = 'model_page'
    const namespace = 'model_'
    const {list: models, Pagination_} = useListPaginationState(route, param, namespace);

    return (
        <div>
            <h1>Models</h1>            
            { models?.map?.((model) => 
                    <ListModelItemBody 
                        model={model} 
                        key={model.id}
                    />
                )
            }
            <Pagination_
            />
        </div>
    )
}