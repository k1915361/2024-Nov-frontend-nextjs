import dayjs from "@/app/_components/dayjsRelativeTime";
import { ispublic } from "./list_datasets";
import { API, API_VIEW } from "../login/fetchData";

export function isforked(model, prefix = "• ") {
    if (model.original_model) { 
        return prefix + "forked"
    }
}

export function TextSecondary({ children, ...props}) {
    return (
        <span 
            className="text-body-secondary text-sm" 
            {...props}
        > 
            {children}
        </span>
    )
}

export function BodyBorderLightSubtle({children, ...props}){
    return (
        <div
            className="p-1 my-0 bg-body rounded border border-light-subtle"
            key={props.key}
            {...props}
        >
            {children}
        </div>
    )
}

export function FontWeightMedium({children, ...props}){
    return (
        <div
            className="fw-medium"
            {...props}
        >
            {children}
        </div>
    )
}

export function ListModelItem({model}) {
    return <>
        <FontWeightMedium>
            {model.name}
        </FontWeightMedium>
        <div>
            <TextSecondary> 
                {model.username} 
            </TextSecondary> 
            <TextSecondary
            > • {ispublic(model)}
            </TextSecondary>
            <TextSecondary
            > • { dayjs(model.updated).fromNow() } 
            </TextSecondary>
            <TextSecondary
            > {isforked(model)}
            </TextSecondary>
        </div>
    </>
}

export function ListModelItemBody({model}) {
    return <BodyBorderLightSubtle key={model.id}>
        <ListModelItem model={model}/>
    </BodyBorderLightSubtle>
}

export function LinkListModelItemBody({model}) {
    return <a 
        href={`${API}/model/${model.id}`} 
        className="btn btn-outline"
    >
        <ListModelItemBody model={model}/>
    </a>
}

export default async function ListModels({  }) {
    const data = await fetch(`${API_VIEW}/models/`)
    const datajson = await data.json()
    const models = datajson.models
 
    return (
        <div>
            <h1>Public Models</h1>
            { models.map((model) => 
                <LinkListModelItemBody model={model}/>                
                )
            }
        </div>
    )
}