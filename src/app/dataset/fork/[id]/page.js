import DatasetPageClient from "./pageClient"

export default async function Page(context) {
    const id = (await context.params).id

    return (
        <>
            <DatasetPageClient id={id} />
        </>        
    )
}
