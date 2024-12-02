import { Suspense } from "react";
import PageComponent from "../page_component";
import UserClientInfo from "./profile";

export const colBoxClass = "col p-3 mb-5 bg-body-tertiary rounded border border-light-subtle"

export const rowBoxClass = "row p-3 mb-5 bg-body rounded border border-light-subtle"

export function ColBox({children, ...props}) {
    return (
        <div className={colBoxClass} {...props}>
            {children}            
        </div>
    )
}

export function RowBox({children, ...props}) {
    return (
        <div className={rowBoxClass} {...props}>
            {children}            
        </div>
    )
}

export default function UserProfilePage() {
    
    return (
        <PageComponent>
            <div className="container">
                <div className="row">
                    <ColBox>
                        Personal Info
                        <Suspense fallback={<div>Loading user info...</div>}>
                            <UserClientInfo/>
                        </Suspense>                        
                    </ColBox>
                    <ColBox>
                        Personal Analytics
                    </ColBox>
                    <ColBox>
                        <RowBox>
                            Profile Views
                        </RowBox>
                        <RowBox>
                            Overall Green Index
                        </RowBox>
                    </ColBox>
                </div>
            </div>
        </PageComponent>
    )

}
