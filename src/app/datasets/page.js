'use client'

import PageComponent from "@/app/pageComponent";
import DatasetPageRange from "../user/datasets/pages/page-range/test/numberPagination";
import SidePanel from "../_components/sidePanel";
import { BadgeButton, FlexContainer } from "../_components/components";
import TogglePanelButton from "./togglePanelButton";
import { useState } from "react";

export default function DatasetsPagesView() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    
    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    function DatasetsSidePanel({}) {
        return (
            <SidePanel 
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel}
            >
                <FlexContainer>
                    <BadgeButton selected={true}>
                        Main
                    </BadgeButton>
                    <BadgeButton>
                        Tasks
                    </BadgeButton>
                    <BadgeButton>
                        Other
                    </BadgeButton>
                </FlexContainer>
            </SidePanel> 
        )
    }
    
    return (
        <PageComponent 
            SidePanel_={DatasetsSidePanel}
            isPanelOpen={isPanelOpen}
        >            
            <TogglePanelButton
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel}
            />
            <DatasetPageRange/>
        </PageComponent>
    )
}