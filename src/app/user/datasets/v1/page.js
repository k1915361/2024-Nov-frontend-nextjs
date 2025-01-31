import PageComponent from "@/app/pageComponent";
import { Suspense } from "react";
import UserDatasets from "./userDatasets";
import { ButtonLight, ColBorderLight, ColButtonDanger, ColButtonLight, ColLinkButtonLight, LinkButtonLight, RowGap1, RowGap1Margin0 } from "../models/page";

export default function UserDatasetRepo() {

    return (
        <PageComponent>
            <h1>Dataset Management</h1>
            <div className="row align-items-start gap-1">
            <RowGap1>
                <ColBorderLight>
                    <RowGap1Margin0>
                        <Suspense>
                            <UserDatasets/>
                        </Suspense>
                    </RowGap1Margin0>
                </ColBorderLight>
                <ColBorderLight>
                    <RowGap1Margin0>
                        <ButtonLight>Dataset Analysis</ButtonLight>
                        <ButtonLight>Cleaning</ButtonLight>
                        <ButtonLight>Enrichment</ButtonLight>
                        <ButtonLight>Data Curation</ButtonLight>
                        <ButtonLight>Balancing</ButtonLight>
                        <ButtonLight>XAI</ButtonLight>
                    </RowGap1Margin0>
                </ColBorderLight>
                <ColBorderLight>
                    Task Details/Report
                    <p></p>
                    <p></p>
                    <p></p>
                </ColBorderLight>
            </RowGap1>
            <RowGap1>
                <ColLinkButtonLight type="submit" name="upload_dataset" href='/dataset/upload/'>
                    Upload Dataset
                </ColLinkButtonLight>
                <ColButtonDanger>
                    Delete Dataset
                </ColButtonDanger>
                <ColButtonLight>
                    Fork
                </ColButtonLight>
            </RowGap1>
        </div>

        </PageComponent>
    )
}