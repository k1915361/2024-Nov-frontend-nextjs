'use client'

import PageComponent from "@/app/pageComponent";
import DatasetsPaginator from "../datasetsPaginator";
import { RowGap0 } from "@/app/_components/components";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

export default function UserDatasetRepo() {

    return (
        <PageComponent>
            <h1>Dataset Management</h1>
            <div className="row align-items-start gap-1">
                <RowGap0>
                    <DatasetsPaginator/>                    
                </RowGap0>
            </div>

        </PageComponent>
    )
}