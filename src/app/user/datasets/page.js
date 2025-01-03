'use client'

import PageComponent from "@/app/page_component";
import { Suspense } from "react";
import UserDatasets from "./userDatasets";
import { ButtonLight, ColBorderLight, ColButtonDanger, ColButtonLight, ColLinkButtonLight, LinkButtonLight, RowGap1, RowGap1Margin0 } from "../models/page";
import DatasetsPaginator from "./datasetsPaginator";

export function RowGap0({children, ...props}) {
    return (
        <div 
            className="row gap-0" 
            {...props}
        >
            {children}
        </div>        
    )
}

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