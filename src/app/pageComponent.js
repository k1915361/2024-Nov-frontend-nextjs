import React from 'react'
import GridListSection from './_components/gridListSection';
import { DivFlexColumnGridContainer, EmptyComponent, MainFlexColumnContainer } from './_components/components';

export default function PageComponent({children, SidePanel_=EmptyComponent}) { 
    return (
        <MainFlexColumnContainer>
            <DivFlexColumnGridContainer>
                <SidePanel_/>
                <GridListSection sidePanelSeen={SidePanel_ != EmptyComponent}>
                    {children}
                </GridListSection>
            </DivFlexColumnGridContainer>
        </MainFlexColumnContainer>
    );
}
