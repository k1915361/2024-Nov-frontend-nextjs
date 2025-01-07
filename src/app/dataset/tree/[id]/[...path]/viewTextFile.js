import { API_DATASET_ROOT } from "@/app/login/fetchData";

export default async function ViewTextFile({apiRoute, apiRoot=API_DATASET_ROOT, ...props }) {
    const response = await fetch(`${apiRoot}/${apiRoute}`);
    console.log(`${apiRoot}/${apiRoute}`);
    if (!response.ok) {
        console.log('Response not ok', response, `${apiRoot}/${apiRoute}`);
        return <></>
    }
    const text = (await response.text()).replace('<pre>', '').replace('</pre>', '')
    
    return (
        <pre {...props}>
            {text}
        </pre>        
    )

}