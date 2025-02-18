import PageComponent from "@/app/pageComponent"
import PageClient from "./pageClient"

export const modelActionBaseRoute = 'model/action/'

export default async function Page(context) {
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