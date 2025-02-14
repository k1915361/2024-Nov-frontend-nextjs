import PageComponent from "@/app/pageComponent";
import { getFileExtension, isTextOrMarkdownOrReadme } from "../../../../tree/[id]/[...path]/page"
import { API_ROOT } from "@/app/login/fetchData";
import { LinkButtonLight } from "@/app/_components/components";
import { datasetTreeTextViewBaseRoute } from "../../../text-view/[id]/[...path]/page";
import { TitleRouteView } from "@/app/dataset/titleRouteView";
import { borderLightClassName } from "@/app/dataset/image/test-async-web-socket-json/serverUtils";

export const responseIssueMessage = "Something wrong with data requesting: Data does not exist or deleted / Server is not available."

export async function ViewMarkdownFile({apiRoute, apiRoot=`${API_ROOT}/`, apiBaseRoute='dataset/blob', ...props}) {
    const response = await fetch(`${apiRoot}${apiBaseRoute}${apiRoute}`);

    if (!response.ok) {
        return <div>
            {`${apiRoot}/${apiBaseRoute}${apiRoute}`}
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
    const extension = getFileExtension(path);

    if (!isTextOrMarkdownOrReadme[extension]) {
        return <div>This file is not a readable text, readme, or markdown file.</div> 
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