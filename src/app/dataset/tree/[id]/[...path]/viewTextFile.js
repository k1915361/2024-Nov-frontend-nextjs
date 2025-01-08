import { API_DATASET_ROOT } from "@/app/login/fetchData";
import { responseIssueMessage } from "../../markdown-view/[id]/[...path]/page";

export default async function ViewTextFile({apiRoute, apiRoot=API_DATASET_ROOT, ...props }) {
    const response = await fetch(`${apiRoot}/${apiRoute}`);
    
    if (!response.ok) {
        return <div>{responseIssueMessage}</div>
    }
    const text = (await response.text()).replace('<pre>', '').replace('</pre>', '')
    
    return (
        <pre {...props} style={{ textWrap: "wrap"}} >
            {text}
        </pre>
    )

}