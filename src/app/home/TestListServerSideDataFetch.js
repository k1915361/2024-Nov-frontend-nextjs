import { API_VIEW } from "./list_models";

export default async function TestListServerSideDataFetch({  }) {
    const data = await fetch(`${API_VIEW}/test_list_random_values/`)
    const datajson = await data.json()
    const list = datajson

    return (
        <div>
            <h1>List Test Server Side</h1>
            {JSON.stringify(list)}
        </div>
    )
}