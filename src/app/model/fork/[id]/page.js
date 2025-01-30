import ModelForkPageClientSide from "./pageClient"

export default async function Page(
    context
) {
    const id = (await context.params).id

    return (
        <>
            <ModelForkPageClientSide id={id} />        
        </>
    )
}
