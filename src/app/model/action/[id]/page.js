import PageComponent from "@/app/pageComponent"
import { API_ROOT } from "@/app/login/fetchData"
import { ProgressBarView } from "@/app/dataset/image/test-async-web-socket-json/action-progress/actionProgressBarView"
import { DivActionResponseView } from "@/app/dataset/image/test-async-web-socket-json/action-buttons/page"

export const modelActionBaseRoute = 'model/action/'

export default async function Page(context) {
    const id = (await context.params).id

    return (
        <>
            <PageComponent>
                <DivActionResponseView
                    buttonName='Model Analysis'
                    apiRoute='/dataset/image/test-async-file-stream-json/action-a'
                />
                <ProgressBarView 
                    buttonName="Distillation"
                    apiRoute="/dataset/image/action-progress"
                />
                <ProgressBarView 
                    buttonName="Fine Tuning" 
                    apiRoute="/dataset/image/action-progress-action-b"
                />
                <ProgressBarView 
                    buttonName="XAI" 
                    apiRoute="/dataset/image/action-progress-action-e"
                />
            </PageComponent>
        </>
    )
}