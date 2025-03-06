import PageComponent from "@/app/pageComponent"
import PageClient from "../../pageClient"

export default async function Page(
    context
) {
    const id = (await context.params).id
    const taskId = (await context.params).task_id
    
    return (
        <PageComponent>
            <PageClient 
                id={id}
                taskId={taskId}
            />
        </PageComponent>
    )
}