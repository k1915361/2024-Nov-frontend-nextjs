import { Suspense } from "react";
import PageComponent from "../pageComponent";
import { ColInvisibleBox } from "../_components/components";
import TopModels from "./list_top_models";
import TopDatasets from "./list_top_datasets";
import { LinkButtonLight } from "../_components/components";
import { Grid, Row, ColumnCard, ListItemBox, LinkDark } from "../_components/components";
import UserDatasets from "../user/datasets/userDatasets";
import UserModels from "../user/models/userModels";

export default function HomePage() {    
    return (
        <PageComponent>
            <Grid>
                <Grid>
                    <Row>
                        <ColumnCard>
                            <h5>
                                General Info About This Platform
                            </h5>
                            <div>
                                This platform enables storing large datasets and models. We offer tools to empower researchers working with models and datasets, helping with dataset Cleaning, Analysis, Enrichment, Data Curation, Balancing, Explainable AI (XAI), along with model training and model tools.
                            </div>
                        </ColumnCard>
                    </Row>
                    <Row>
                        <ColumnCard>
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
                        </ColumnCard>
                        <ColumnCard>
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
                        </ColumnCard>
                    </Row>
                </Grid>
            </Grid>
            <Row className="grid grid-cols-1 gap-1 md:grid-cols-2">
                <ColInvisibleBox>
                    <Suspense>
                        <UserModels/>
                    </Suspense>
                </ColInvisibleBox>
                <ColInvisibleBox>
                    <Suspense>
                        <UserDatasets/>
                    </Suspense>
                </ColInvisibleBox>
                <ColInvisibleBox>
                    <h5>List of Top Models</h5>
                    <Suspense fallback={<div>Loading top models...</div>}>
                        <TopModels/>
                    </Suspense>
                    <LinkButtonLight href='/models/?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </ColInvisibleBox>
                <ColInvisibleBox>
                    <h5>List of Top Datasets</h5>
                    <Suspense fallback={<div>Loading top datasets...</div>}>
                        <TopDatasets/>
                    </Suspense>
                    <LinkButtonLight href='/datasets/?page=1&per_page=4'>
                        See More
                    </LinkButtonLight>
                </ColInvisibleBox>
            </Row>
        </PageComponent>
    )
}