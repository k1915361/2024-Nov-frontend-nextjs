import { Suspense } from "react";
import PageComponent from "../pageComponent";
import UserProfile from "./userProfile";
import { ColInvisibleBox, RowBox } from "../_components/components";

export default function UserProfilePage() {
    
    return (
        <PageComponent>
            <div className="row">
                <ColInvisibleBox>
                    Personal Info
                    <Suspense fallback={<div>Loading user info...</div>}>
                        <UserProfile/>
                    </Suspense>
                </ColInvisibleBox>
                <ColInvisibleBox>
                    Personal Analytics
                </ColInvisibleBox>
                <ColInvisibleBox>
                    <RowBox>
                        Profile Views
                    </RowBox>
                    <RowBox>
                        Overall Green Index
                    </RowBox>
                </ColInvisibleBox>
            </div>
        </PageComponent>
    )

}
