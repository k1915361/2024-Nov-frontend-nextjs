import PageComponent from "@/app/page_component";
import { isText, isYaml } from "../../../[id]/[...path]/page"
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/page";
import { API_DATASET_ROOT } from "@/app/login/fetchData";
import { LinkButtonLight } from "@/app/user/models/page";
import { datasetTreeTextViewBaseRoute } from "../../../text-view/[id]/[...path]/page";
import { TitleRouteView } from "@/app/dataset/titleRouteView";

export const responseIssueMessage = "Something wrong with data requesting: Data does not exist or deleted / Server is not available."

export async function ViewMarkdownFile({apiRoute, apiRoot=API_DATASET_ROOT, ...props}) {
    const response = await fetch(`${apiRoot}/${apiRoute}`);

    if (!response.ok) {
        return <div>
            {responseIssueMessage}
        </div>
    }
    const markdown = (await response.text()).replace('<pre>', '<pre style="text-wrap: wrap;">')

    return <div 
        dangerouslySetInnerHTML={{__html: markdown }} 
        {...props} 
    >
    </div>
}

export default async function ViewMarkdownFilePage({
    params,
}) {
    const id = (await params).id
    const path = (await params).path.join('/')

    if ((!isText(path)  
        && !isYaml(path))) {
        return <div>This file is not a text or yaml file.</div> 
    }

    return (
        <PageComponent>
            <TitleRouteView apiRoute={`${id}/${path}`} />            
            <ViewMarkdownFile apiRoute={`${id}/${path}`} className={borderLightClassName}/>
            <LinkButtonLight href={`/${datasetTreeTextViewBaseRoute}${id}/${path}`}>
                Raw text view
            </LinkButtonLight>
        </PageComponent>
    )
}