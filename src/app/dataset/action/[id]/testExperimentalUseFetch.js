'use client'

import { useFetchExperimental } from "../../tree/[id]/[...path]/viewTextFileClientSide";
import { DatasetInfoComponent } from "./datasetInfo";
import { CsvTableAndDownloadButtonComponent } from "./datasetCsvView";

export default function TestExperimentalUseFetch({id}) { 
    const route = `dataset/${id}`
    const {data, error, loading } = useFetchExperimental(route)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                Error: {error.message}
                {/* <pre>{error.stack}</pre>  */} {/* For debugging, but generally don't show to users */}
            </div>
        );
    }

    return (
        <>
            <div>data: {JSON.stringify(data)}</div>
            <div>{JSON.stringify(error)}</div>
            <div>{JSON.stringify(loading ? 'loading' : '')}</div>
            <div>
                <DatasetInfoComponent data={data}/>
            </div>
            <div>
                <div>
                    <CsvTableAndDownloadButtonComponent directory={data?.dataset_directory} />
                </div>
            </div>
        </>
    )

}