import PageComponent from "@/app/pageComponent";
import { Suspense } from "react";
import UserModels from "../userModels";
import { ButtonLight, ColBorderLight, ColButtonDanger, ColButtonLight, ColLinkButtonLight, RowGap1, RowGap1Margin0 } from "@/app/_components/components";

/** @deprecated. Will be deleted after a commit. */
export default function UserModelRepo() {
    return (
        <PageComponent>
            <h1>AI Model Management</h1>
            <div className="row align-items-start gap-1">
                <RowGap1>
                    <ColBorderLight>
                        <RowGap1Margin0>
                            <Suspense>
                                <UserModels/>
                            </Suspense>
                        </RowGap1Margin0>
                    </ColBorderLight>
                    <ColBorderLight>
                        <RowGap1Margin0>
                            <ButtonLight>Model Analysis</ButtonLight>
                            <ButtonLight>Distillation</ButtonLight>
                            <ButtonLight>Fine Tuning</ButtonLight>
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
                    <ColLinkButtonLight type="submit" name="upload_model" href='/model/upload/'>
                        Upload Model
                    </ColLinkButtonLight>                
                    <ColButtonDanger>
                        Delete Model
                    </ColButtonDanger>
                    <ColButtonLight>
                        Fork
                    </ColButtonLight>
                </RowGap1>
            </div>
        </PageComponent>
    )
}