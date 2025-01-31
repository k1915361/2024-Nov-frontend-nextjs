const { default: PageComponent } = require("@/app/pageComponent");
const { RowGap1 } = require("../models/page");

export function f() {
    
}

export default function UserFinalTaskAnalytics() {

    return (
        <PageComponent>
            <div className="row gap-1">
                <div className="row p-1 bg-body-tertiary rounded border border-light-subtle">
                    <h5>Final Task Analytics</h5>
                </div>
                <RowGap1>
                    <div className="col p-2 bg-body-tertiary rounded border border-light-subtle">
                        Analytics 1
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="col p-2 bg-body-tertiary rounded border border-light-subtle">
                        Analytics 2
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="col p-2 bg-body-tertiary rounded border border-light-subtle">
                        Analytics 3
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </RowGap1>
                <div className="row bg-body-tertiary rounded border border-light-subtle">
                    <div>Green Index Visual Analytics</div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className="row gap-1">
                    <button className="col btn btn-primary">
                        Save
                    </button>
                    <button className="col btn btn-primary">
                        Download
                    </button>
                </div>        
            </div>
        </PageComponent>
    )
}