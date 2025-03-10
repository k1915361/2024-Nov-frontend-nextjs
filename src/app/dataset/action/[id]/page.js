import PageComponent from "@/app/pageComponent"
import PageClient from "./pageClient"

export const datasetActionBaseRoute = 'dataset/action/'

export default async function Page(
    context
) {
    const id = (await context.params).id
    
    return (
        <PageComponent>
            <PageClient 
                id={id}
                taskId={undefined}
            />
        </PageComponent>
    )
}