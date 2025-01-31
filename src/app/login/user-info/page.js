import PageComponent from "../../pageComponent";
import { fetchData } from "../fetchData";

export async function testUserInfoRequset() {
    const route = '/api/token/test/login/cookie/'
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    
    const data = await fetchData(route, options)
    return data
}

export default async function TestUserInfoRequset({  }) {
    
    const data = await testUserInfoRequset()
    console.log(data)
    
    return (
        <PageComponent>
            <div>Test User Info Request</div>
        </PageComponent>
    )
}