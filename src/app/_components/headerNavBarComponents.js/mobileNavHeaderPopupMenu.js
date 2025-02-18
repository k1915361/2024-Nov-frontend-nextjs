'use client'

import { useState } from "react"
import { ButtonBorderLight, Icon } from "../components"
import { MobileNavButtonsPanelGrid, MobileNavHeaderProfilePanel, MobileNavProfileIcon, MobileNavProfileUsername, SectionHeader } from "./components"
import { MobileBlockLargeScreenHidden, MobileNavLinkButton, MobileNavMain } from "./components"
import { useAuth } from "@/app/context/AuthContext"

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
    const { user } = useAuth()

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
                        <SectionHeader name='Account'/>
                        <MobileNavHeaderProfilePanel>
                            <MobileNavProfileIcon/>
                            <MobileNavProfileUsername
                                href='/profile'
                                name={user?.username || 'guest'}
                            >
                            </MobileNavProfileUsername>
                        </MobileNavHeaderProfilePanel>
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
                                name="Upload Datasets"
                                href="/dataset/upload/"
                                bootstrapIcon='cloud-arrow-up'
                            />
                            <MobileNavLinkButton 
                                name="Log In"
                                href="/login/"
                                bootstrapIcon='door-open'
                            />
                            <MobileNavLinkButton 
                                name="Log Out"
                                href="/logout/"
                                bootstrapIcon='door-closed'
                            />
                            <MobileNavLinkButton 
                                name="Sign Up"
                                href="/signup/"
                                bootstrapIcon='door-closed'
                            />
                            <MobileNavLinkButton 
                                name="Final Task A"
                                title="Final Task Analytics"
                                href="/user/final-task-analytics/"
                                bootstrapIcon=''
                            />
                            <MobileNavLinkButton 
                                name="HITLRF"
                                href="/user/hitl-reinforced-feedback/"
                                title="HITL Reinforced Feedback"
                                bootstrapIcon=''
                            />
                            <MobileNavLinkButton 
                                name="Root"
                                href="/"
                                bootstrapIcon=''
                            />
                        </MobileNavButtonsPanelGrid>
                    </MobileNavMenuContainerClientSide>
                </ul>
            </MobileNavMain>
        </MobileBlockLargeScreenHidden>
    )
} 