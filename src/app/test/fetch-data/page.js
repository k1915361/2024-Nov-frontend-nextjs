import PageComponent from "../../page_component";
import { fetchData } from "@/app/login/fetchData";

export default async function TestListServerSideDataFetchPage({  }) {
    const blogPromise = fetch('https://api.vercel.app/blog').then((res) =>
        res.json()
    )

    fetchData()
    
    return (
        <PageComponent>
        </PageComponent>
    )
}