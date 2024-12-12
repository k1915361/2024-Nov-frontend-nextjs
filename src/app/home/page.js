import { Suspense } from "react";
import PageComponent from "../page_component";
import { ColBox, RowBox } from "../profile/page";
import TopModels from "./list_top_models";
import TopDatasets from "./list_top_datasets";


export function Text2ndarySmall({children, ...props}) {
    return (
        <span className="text-body-secondary text-sm" {...props}>{children}</span>
    )
}

export function LinkText({children, type = 'model', id = 0, ...props}) {
    return (
        <a className="fw-semibold" href={`/${type}/${id}`} {...props}>{ children }</a>
    )
}

export function ListItemBox({children, type='model', ...props}) {
    return (
        <li style={{whiteSpace: "nowrap"}} {...props}>
            {children}            
        </li>
    )
}

export default function HomePage() {
    
    return (
        <PageComponent>
            <div className="row">
                <ColBox>
                    <div>List of Top Models</div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopModels/>
                    </Suspense>
                </ColBox>
                <ColBox>
                    <div>List of Top Datasets</div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopDatasets/>
                    </Suspense>
                </ColBox>
                <ColBox>
                    <div>List of Top of Verified Energy Efficient Tools</div>
                    <ol>
                        <ListItemBox>
                            <LinkText>
                                Plant Disease Detection Tool
                            </LinkText>
                        </ListItemBox>
                        <ListItemBox>
                            <LinkText>
                                Tool B
                            </LinkText>
                        </ListItemBox>
                        <ListItemBox>
                            <LinkText>
                                Tool C
                            </LinkText>
                        </ListItemBox>
                    </ol>
                </ColBox>
                <ColBox>
                    <RowBox>
                        News
                    </RowBox>
                    <RowBox>
                        General Info about the platform
                    </RowBox>
                </ColBox>
            </div>
        </PageComponent>
    )
}