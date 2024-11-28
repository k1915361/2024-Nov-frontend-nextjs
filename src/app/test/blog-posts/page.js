import { BlogPosts } from "@/app/blog-posts";
import PageComponent from "../../page_component";
import { BlogProvider } from "@/app/blog-context";

export default async function TestListServerSideDataFetchPage({  }) {
    const blogPromise = fetch('https://api.vercel.app/blog').then((res) =>
        res.json()
    )
    
    return (
        <PageComponent>
            <BlogProvider blogPromise={blogPromise}>
                <BlogPosts/>
            </BlogProvider>            
        </PageComponent>
    )
}