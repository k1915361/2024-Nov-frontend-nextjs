import { refreshToken } from "@/app/login/refreshToken";
import PageComponent from "../../page_component";

export default async function TestRefreshToken({  }) {
    
    refreshToken();

    return (
        <PageComponent>
            <div>Test refresh token</div>
        </PageComponent>
    )
}