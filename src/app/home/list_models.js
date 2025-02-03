import dayjs from "@/app/_components/dayjsRelativeTime";
import { API_HTTP, API_VIEW } from "../login/fetchData";
import { ispublic } from "./listDatasetItem";
import { DotSeparator } from "../_components/components";

export function isModelForked(model, Prefix = DotSeparator) {
    if (model.original_model) {         
        return <>
            <Prefix/> 
            <span>
                forked
            </span>
        </>
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

export function modelUsernameComponent(model, isUsernameVisible=true, Separator = DotSeparator) {
    if (isUsernameVisible){
        return (
            <>
                <span>
                    {model.username}
                </span> 
            </>
        )
    }
}

export function ListModelItem({model, index='', href, isPublicSignVisible=true, isUsernameVisible=true}) {
    return <>
        <header className="flex items-center mb-0.5">
            <a href={href} className="text-md truncate text-black dark:group-hover/repo:text-yellow-500 group-hover/repo:text-red-600 text-smd">
                {index} {model.name}
            </a>
        </header>        
        <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
            {modelUsernameComponent(model, isUsernameVisible)}
            {(isUsernameVisible && isPublicSignVisible) &&
                <DotSeparator/>
            }
            <span> {ispublic(model, isPublicSignVisible)} </span>
            <span> 
                {dayjs(model.updated).fromNow()} 
            </span>
            <span> 
                {isModelForked(model)}
            </span>
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
        href={`/model/${model.id}`} 
        className="btn btn-outline"
    >
        <ListModelItemBody model={model}/>
    </a>
}

export function LinkListModelItemBodyDatasetToModel({dataset}) {
    return <LinkListModelItemBody model={dataset}/>
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