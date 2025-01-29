import PageClient from "./pageClient"

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <>
            <PageClient id={id} />        
        </>
    )
}
