'use client'

import { LinkListModelItemBodyDatasetToModel } from "../home/list_models"
import DatasetPageRange from "../user/datasets/pages/page-range/test/numberPagination"

export default function ModelsPageRange() {

    return (
        <DatasetPageRange 
            namespace='models' 
            LinkListItemBody={LinkListModelItemBodyDatasetToModel}
        />
    )
}