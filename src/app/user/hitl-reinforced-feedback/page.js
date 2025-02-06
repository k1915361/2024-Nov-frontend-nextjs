import PageComponent from "@/app/pageComponent";
import { RowGap1 } from "@/app/_components/components";

export default function UserHITLReinforcedFeedback() {

    return (
        <PageComponent>
            <div className="row gap-1">
                <div className="row p-1 bg-body-tertiary rounded border border-light-subtle">
                    <h5>HITL Reinforced Feeback</h5>
                </div>
                <RowGap1>
                    <div className="col p-1 bg-body-tertiary rounded border border-light-subtle">
                        <div>Select</div>
                        <div>Recommendation 1</div>
                        <div>Balance Data A</div>
                        <div>Option B</div>
                        <div>Option C</div>
                    </div>
                    <div className="col p-1 bg-body-tertiary rounded border border-light-subtle">
                        <div>Select</div>
                        <div>Recommendation 2</div>
                        <div>KD for the model A</div>
                        <div>Option B</div>
                        <div>Option C</div>
                    </div>
                </RowGap1>
                <div className="row p-1 bg-body-tertiary rounded border border-light-subtle">
                    <div>Current Performance Analytics</div>
                    <div>Results A</div>
                    <div>Results B</div>
                    <div>Results C</div>
                </div>
                <div className="row gap-1">
                    <button className="col btn btn-primary">
                        Apply Recommendation
                    </button>
                    <button className="col btn btn-primary">
                        Complete Process
                    </button>
                </div>        
            </div>            
        </PageComponent>
    )
}