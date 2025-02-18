'use client'

import { useState } from "react"
import { ButtonBorderLight, Icon } from "../components"
import { MobileNavButtonsPanelGrid } from "./components"
import { MobileBlockLargeScreenHidden, MobileNavLinkButton, MobileNavMain } from "./components"

export const openedMap = {
    false: 'hidden',
    true: ''
}

export function MobileNavMenuContainerClientSide({ children, addClassname, opened = false, ...props }) {
    return (
        <div className={`fixed inset-0 z-30 overflow-y-auto overscroll-contain bg-white top-16 ${openedMap[opened]} ${addClassname}`}
            {...props}
        >
            {children}
        </div>

    )
}

export default function MobileNavHeaderPopupMenu({ children }) {
    const [opened, setOpened] = useState(true)

    function toggleHidden() {
        setOpened(!opened)
    } 

    return (
        <MobileBlockLargeScreenHidden>
            <ButtonBorderLight 
                addClassname="ms-1 dropdown-toggle"
                onClick={toggleHidden}
            >
                <Icon bootstrapIcon={opened ? 'x' : 'list' } />
            </ButtonBorderLight>
            <MobileNavMain>
                <ul className="my-0 space-y-0 px-2 pb-0">
                    <MobileNavMenuContainerClientSide opened={opened}>
                        <MobileNavButtonsPanelGrid>
                            <MobileNavLinkButton
                                href='/home'
                                name='Home'
                                bootstrapIcon='house'
                            />
                            <MobileNavLinkButton
                                name='Profile'
                                bootstrapIcon='person-circle'
                                href="/profile"
                            />
                            <MobileNavLinkButton
                                name='New Task'
                                href="/user/final-task-analytics/"
                                bootstrapIcon='sliders2'
                                title='Start a New Optimisation Task'
                            />
                            <MobileNavLinkButton
                                name="Previous Tasks"
                                href="/user/previous-tasks/"
                                bootstrapIcon='clipboard2-check'
                            />
                            <MobileNavLinkButton
                                name="Models"
                                href="/user/models/management"
                                bootstrapIcon='collection'
                                title="Personal Model Repo"
                            />
                            <MobileNavLinkButton
                                name="Datasets"
                                bootstrapIcon='collection'
                                title="Personal Dataset Repo"
                                href="/user/datasets/?page=1&per_page=4"
                            />
                            <MobileNavLinkButton
                                name="Upload Models"
                                href="/model/upload/"
                                bootstrapIcon='cloud-arrow-up'
                            />
                            <MobileNavLinkButton 
                                href="/dataset/upload/"
                                bootstrapIcon='cloud-arrow-up'
                                name="Upload Datasets"
                            />
                            <MobileNavLinkButton 
                                href="/login/"
                                bootstrapIcon='door-open'
                                name="Log In"
                            />
                            <MobileNavLinkButton 
                                href="/logout/"
                                bootstrapIcon='door-closed'
                                name="Log Out"
                            />
                            <MobileNavLinkButton 
                                href="/signup/"
                                bootstrapIcon='door-closed'
                                name="Sign Up"
                            />
                            <MobileNavLinkButton 
                                href="/user/final-task-analytics/"
                                name="FinalTaskA"
                                title="Final Task Analytics"
                            />
                            <MobileNavLinkButton 
                                href="/user/hitl-reinforced-feedback/"
                                name="HITLRF"
                                title="HITL Reinforced Feedback"
                            />
                            <MobileNavLinkButton 
                                href="/"
                                name="Root"
                            />
                        </MobileNavButtonsPanelGrid>
                    </MobileNavMenuContainerClientSide>
                </ul>
            </MobileNavMain>
        </MobileBlockLargeScreenHidden>
    )
} 