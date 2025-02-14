'use client'

import { ListDatasetItemCard } from "@/app/home/listDatasetItem";
import { API_ROOT } from "../../login/fetchData";
import { useListPaginationState } from "../models/pages/pagination";
import { useAuth } from "@/app/context/AuthContext";
import { BoldHeading4 } from "@/app/_components/components";
import { isEmptyObject } from "@/app/model/fork/[id]/pageClient";

export default function ListDatasetsPages() {
    const route = `${API_ROOT}/user/datasets/?dataset_page=`    
    const param = 'dataset_page'
    const namespace = 'dataset_'
    const {list: datasets, Pagination_} = useListPaginationState(route, param, namespace);
    const { user } = useAuth()

    return (
        <div>
            <h1>My Datasets</h1>
            {((!user?.username) || isEmptyObject(user)) &&
                <BoldHeading4>Please log in to see your datasets.</BoldHeading4>
            }
            { datasets?.map?.((dataset) =>
                    <ListDatasetItemCard 
                        dataset={dataset} 
                        key={dataset.id}
                        isUsernameVisible={false}
                    />
                )
            }
            <Pagination_
            />
        </div>
    )
}