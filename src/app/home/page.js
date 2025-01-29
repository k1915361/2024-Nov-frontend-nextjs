import { Suspense } from "react";
import PageComponent from "../page_component";
import { ColBox } from "../profile/page";
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

export function LinkDark({children, href, ...props}) {
    return (
        <a 
            className="link-dark link-underline-opacity-25 link-underline-opacity-100-hover" 
            href={href} 
            {...props}
        >
            { children }
        </a>
    )
}

export function LinkTextNormal({children, type = 'model', id = 0, ...props}) {
    return (
        <a className="" href={`/${type}/${id}`} {...props}>{ children }</a>
    )
}

export function LinkTextSecondaryNoUnderline({children, type = 'model', id = 0, ...props}) {
    return (
        <a 
            className="link-secondary link-underline link-underline-opacity-0 fw-medium fs-5" 
            href={`/${type}/${id}`} 
            {...props}
        >
            { children }
        </a>
    )
}

export function LinkTextBlackNoUnderline({children, type = 'model', id = 0, ...props}) {
    return (
        <a 
            className="link-body-emphasis link-underline link-underline-opacity-0 fw-medium fs-5" 
            href={`/${type}/${id}`} 
            {...props}
        >
            { children }
        </a>
    )
}

export function LinkDarkNoUnderline({children, type = 'model', id = 0, overrideClassname, ...props}) {
    return (
        <a 
            className={`link-body-emphasis link-underline link-underline-opacity-0 ${overrideClassname}`} 
            href={`/${type}/${id}`} 
            {...props}
        >
            { children }
        </a>
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

export function Grid({children, ...props}) {
    return (
        <div className="grid" {...props}>
            {children}
        </div>
    )
}

export function BorderRound({children, ...props}) {
    return (
        <div className="border rounded m-1 p-3" {...props}>
            {children}
        </div>
    )
}

export function ColBorderRoundShadow({children, ...props}) {
    return (
        <div className="col border border-light-subtle rounded m-1 p-3 shadow-sm" 
            {...props}
        >
            {children}
        </div>
    )
}

export function BorderRoundShadow({children, ...props}) {
    return (
        <div className="border border-light-subtle rounded m-1 p-3 shadow-sm" 
            {...props}
        >
            {children}
        </div>
    )
} 

export function BorderRoundShadowIcon({children, overrideClassname, ...props}) {
    return (
        <div className={`border border-light-subtle rounded m-0 p-2 shadow-sm ${overrideClassname}`} 
            {...props}
        >
            {children}
        </div>
    )
} 

export default function HomePage() {
    
    return (
        <PageComponent>
            <Grid>
                <Grid>
                    <Row className="row">

                        <ColBorderRoundShadow>
                            <h5>
                                General Info About This Platform
                            </h5>
                            <div>
                                This platform enables storing large datasets and models. We offer tools to empower researchers working with models and datasets, helping with dataset Cleaning, Analysis, Enrichment, Data Curation, Balancing, Explainable AI (XAI), along with model training and model tools.
                            </div>
                        </ColBorderRoundShadow>
                    </Row>
                    <Row>
                        <ColBorderRoundShadow>
                            <h5>List of Top of Verified Energy Efficient Tools</h5>
                            <ol>
                                <ListItemBox>
                                    <LinkDark>
                                        Plant Disease Detection Tool
                                    </LinkDark>
                                </ListItemBox>
                                <ListItemBox>
                                    <LinkDark>
                                        Tool B
                                    </LinkDark>
                                </ListItemBox>
                                <ListItemBox>
                                    <LinkDark>
                                        Tool C
                                    </LinkDark>
                                </ListItemBox>
                            </ol>                            
                        </ColBorderRoundShadow>
                        <ColBorderRoundShadow>
                            <h5>News</h5>
                            <div>
                                <LinkDark href='/news/dataset/cleaning'>
                                    Dataset Cleaning
                                </LinkDark>
                            </div>
                            <div>
                                <LinkDark href='/news/dataset/analysis'>
                                    Dataset Analysis
                                </LinkDark>
                            </div>
                            <div>
                                <LinkDark href='/news/dataset/enrichment'>
                                    Dataset Enrichment
                                </LinkDark>
                            </div>
                            <div>
                                <LinkDark href='/news/dataset/curation'>
                                    Data Curation
                                </LinkDark>
                            </div>
                            <div>
                                <LinkDark href='/news/dataset/balancing'>
                                    Data Balancing
                                </LinkDark>
                            </div>
                            <div>
                                <LinkDark href='/news/dataset/explainable-ai'>
                                    Explainable AI (XAI)
                                </LinkDark>
                            </div>
                        </ColBorderRoundShadow>
                    </Row>
                </Grid>
            </Grid>
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