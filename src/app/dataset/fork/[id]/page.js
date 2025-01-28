import PageComponent from "@/app/page_component"
import PageClient from "./pageClient"

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <PageComponent>
            <h5>Fork a dataset.</h5>
            <PageClient id={id} />
        </PageComponent>
    )
}
