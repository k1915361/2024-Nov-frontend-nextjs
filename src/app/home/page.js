import { Suspense } from "react";
import PageComponent from "../page_component";
import { ColBox, RowBox } from "../profile/page";
import TopModels from "./list_top_models";
import TopDatasets from "./list_top_datasets";
import { LinkButtonLight } from "../user/models/page";


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

export function LinkTextNormal({children, type = 'model', id = 0, ...props}) {
    return (
        <a className="" href={`/${type}/${id}`} {...props}>{ children }</a>
    )
}

export function ListItemBox({children, type='model', ...props}) {
    return (
        <li style={{whiteSpace: "nowrap"}} {...props}>
            {children}            
        </li>
    )
}

export function ListItemDivBox({children, type='model', ...props}) {
    return (
        <div style={{whiteSpace: "nowrap"}} {...props}>
            {children}
        </div>
    )
}

export function Row({children, ...props}) {
    return (
        <div className="row" {...props}>
            {children}
        </div>
    )
}

export default function HomePage() {
    
    return (
        <PageComponent>
            <Row>
                <ColBox>
                    <RowBox>
                        <h5>
                            General Info About This Platform
                        </h5>
                        <div>
                            This platform enables storing large datasets and models. We offer tools to empower researchers working with models and datasets, helping with dataset Cleaning, Analysis, Enrichment, Data Curation, Balancing, Explainable AI (XAI), along with model training and model tools.
                        </div>
                    </RowBox>
                    <RowBox>
                        <h5>List of Top of Verified Energy Efficient Tools</h5>
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
                    </RowBox>
                </ColBox>
                <ColBox>
                    <RowBox>
                        <h5>News</h5>
                            <LinkText href='/news/dataset/cleaning'>
                                Dataset Cleaning
                            </LinkText>
                            <LinkText href='/news/dataset/analysis'>
                                Dataset Analysis
                            </LinkText>
                            <LinkText href='/news/dataset/enrichment'>
                                Dataset Enrichment
                            </LinkText>
                            <LinkText href='/news/dataset/curation'>
                                Data Curation
                            </LinkText>
                            <LinkText href='/news/dataset/balancing'>
                                Data Balancing
                            </LinkText>
                            <LinkText href='/news/dataset/explainable-ai'>
                                Explainable AI (XAI)
                            </LinkText>
                    </RowBox>
                </ColBox>
            </Row>
            <Row>
                <ColBox>
                    <h5>List of Top Models</h5>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopModels/>
                    </Suspense>
                    <LinkButtonLight href='/models/?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </ColBox>
                <ColBox>
                    <h5>List of Top Datasets</h5>
                    <Suspense fallback={<div>Loading...</div>}>
                        <TopDatasets/>
                    </Suspense>
                    <LinkButtonLight href='/user/datasets/pages/page-range?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </ColBox>
            </Row>
        </PageComponent>
    )
}