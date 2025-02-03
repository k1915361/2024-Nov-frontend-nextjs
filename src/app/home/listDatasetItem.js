import dayjs from "@/app/_components/dayjsRelativeTime";
import { BodyBorderLightSubtle, FontWeightMedium, modelUsernameComponent, TextSecondary } from "./list_models";
import { DotSeparator, OverviewCardWrapper } from "../_components/components";

export function isDatasetForked(dataset, Prefix=DotSeparator) {
    if (dataset.original_dataset) { 
        return <>
            <Prefix/> 
            <span>
                forked
            </span>
        </>
    }
}

export function ispublic(dataset, visible=true, Prefix=DotSeparator) {
    if (dataset.is_public || !visible) { 
        return ""
        
    } else {
        return <>        
            <span>
                private
            </span>
            <DotSeparator/>
        </>
    }
}

export function ListDatasetItem({dataset, index='', href, isPublicSignVisible=true, isUsernameVisible=true}) {
    return <>
        <header className="flex items-center mb-0.5">
            <a href={href} className="text-md truncate text-black dark:group-hover/repo:text-yellow-500 group-hover/repo:text-red-600 text-smd">
                {index} {dataset.name}
            </a>
        </header>        
        <div className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
            {modelUsernameComponent(dataset, isUsernameVisible)}
            {(isUsernameVisible && isPublicSignVisible) && 
                <DotSeparator/>
            }
            <span> {ispublic(dataset, isPublicSignVisible)} </span>            
            <span> 
                {dayjs(dataset.updated).fromNow()} 
            </span>
            <span> 
                {isDatasetForked(dataset)}
            </span>
        </div>
    </>
}

export function ListDatasetItemBody({dataset}) {
    return <OverviewCardWrapper key={dataset.id}>
        <ListDatasetItem dataset={dataset}/>
    </OverviewCardWrapper>
}

export function LinkListDatasetItemBody({dataset}) {
    return <div 
        className="text-start my-0 p-0"
    >
        <ListDatasetItemBody dataset={dataset}>
        </ListDatasetItemBody>
    </div>
}