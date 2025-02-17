import PageComponent from "@/app/pageComponent"
import { ProgressBarView } from "@/app/dataset/image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { DivActionResponseView } from "@/app/dataset/image/test-async-web-socket-json/action-buttons/page"
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