import PageComponent from "@/app/pageComponent";
import { RowGap1, RowGap1Margin0 } from "@/app/_components/components";
import { ColButtonLight } from "@/app/_components/components";
import { BtnPrimary, ColBorderLightSubtleMinHeight } from "../dataset/[id]/page";

export function ColBorderLightSubtle({children, ...props}) {
    return (
        <ColBorderLightSubtleMinHeight 
            style={{}} 
            {...props}
        >
            {children}
        </ColBorderLightSubtleMinHeight>
    )
}

export function ColBtnPrimary({children, ...props}) {
    return (
        <button 
            {...props}
            className="col btn btn-primary"
        >
            {children}
        </button>
    )
}

export default function UserPreviousTasks() {
    
    return (
        <PageComponent>
            <div className="col p-1 mb-1 bg-body-tertiary rounded border border-light-subtle">
                <h3>Previous RAIDO Tasks</h3>
            </div>
            <div className="row align-items-start gap-1">
                <div className="row gap-1">
                    <ColBorderLightSubtle>
                        <RowGap1Margin0>
                            <BtnPrimary>RAIDO Task 01</BtnPrimary>
                            <BtnPrimary>RAIDO Task 02</BtnPrimary>
                            <BtnPrimary>RAIDO Task 03</BtnPrimary>
                        </RowGap1Margin0>
                    </ColBorderLightSubtle>
                    <ColBorderLightSubtle>
                        <RowGap1Margin0>
                            <BtnPrimary>Task Analysis</BtnPrimary>
                            <BtnPrimary>Action 02</BtnPrimary>
                            <BtnPrimary>Action 03</BtnPrimary>
                        </RowGap1Margin0>
                    </ColBorderLightSubtle>
                    <ColBorderLightSubtle>
                        Task Details/Report
                        <p></p>
                        <p></p>
                        <p></p>
                    </ColBorderLightSubtle>
                </div>
                <RowGap1>
                    <ColBtnPrimary>
                        Reproduce
                    </ColBtnPrimary>
                    <ColBtnPrimary>
                        Save
                    </ColBtnPrimary>
                    <ColBtnPrimary>
                        Download
                    </ColBtnPrimary>
                </RowGap1>     
            </div>
        </PageComponent>
    )
}