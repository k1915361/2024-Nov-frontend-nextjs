import { Suspense } from "react";
import Username from "./username";
import { ButtonBorderLight, DisplayFlexContentCenterBorder, DropDownItem, GradientGrayToWhiteButton, Icon, Input, LinkDarkNoUnderlineIconText, LogoIconText, LogoText, WidthFullContainerFlex } from "./components";
import MobileNavHeaderPopupMenu from "./headerNavBarComponents.js/mobileNavHeaderPopupMenu";

export default function HeaderNavBar({ children }) {
    return (
    <>
        <DisplayFlexContentCenterBorder>
            <WidthFullContainerFlex>
                <div className="d-flex mx-1 me-3">
                    <a href="/home/" 
                        className="link-dark text-dark flex link-underline-dark link-underline-opacity-0"
                        title="Home"
                    >
                        <LogoIconText className="fw-bold" style={{fontSize:'1.3rem'}}>
                            😊 
                        </LogoIconText>
                            <LogoText className="ms-1 ps-0 hidden  whitespace-nowrap text-lg font-bold md:block" style={{fontSize:'1.1rem', fontWeight: '800'}}>
                                Logo
                            <span className="">
                            </span>
                        </LogoText>
                    </a>
                </div>
                <form className="" role="search">
                    <div className="relative w-full flex items-center">
                        <ButtonBorderLight 
                            type="submit"
                        >
                            <Icon bootstrapIcon='search' />
                        </ButtonBorderLight>                            
                        <div className="relative inline-block flex-1 lg:max-w-sm mr-2 sm:mr-4 md:mr-3 xl:mr-6 ">
                            <Input
                                type="search" 
                                id="form1" 
                                placeholder="Search models, datasets, users..."
                            />
                        </div>
                    </div>
                </form>
                <Suspense>
                    <MobileNavHeaderPopupMenu/>
                </Suspense>
                <nav aria-label="Main" className="ml-auto hidden lg:block">
                    <ul className="flex items-center pb-0 mb-0 ps-0 space-x-1.5 2xl:space-x-2">
                        <LinkDarkNoUnderlineIconText 
                            href="/home" 
                            bootstrapIcon='house'
                        >
                            Home
                        </LinkDarkNoUnderlineIconText>
                        <LinkDarkNoUnderlineIconText 
                            href="/profile"
                            bootstrapIcon='person-circle'
                        >
                            Profile
                        </LinkDarkNoUnderlineIconText>
                        <LinkDarkNoUnderlineIconText 
                            href="/user/final-task-analytics/"                         
                            bootstrapIcon='sliders2'
                            title='Start a New Optimisation Task'
                        >
                            New Task
                        </LinkDarkNoUnderlineIconText>
                        <LinkDarkNoUnderlineIconText 
                            href="/user/previous-tasks/"
                            bootstrapIcon='clipboard2-check'
                        >
                            Previous Tasks
                        </LinkDarkNoUnderlineIconText>
                        <LinkDarkNoUnderlineIconText 
                            href="/user/models/management"
                            bootstrapIcon='collection'
                            title="Personal Model Repo"
                        >
                            Models
                        </LinkDarkNoUnderlineIconText>
                        <LinkDarkNoUnderlineIconText 
                            href="/user/datasets/?page=1&per_page=4"
                            bootstrapIcon='collection'
                            title="Personal Dataset Repo"
                        >
                            Datasets
                        </LinkDarkNoUnderlineIconText> 
                        <Suspense> 
                            <Username/> 
                        </Suspense> 
                    </ul> 
                </nav> 
                <div className="dropdown-center mx-1 hidden lg:block"> 
                    <ButtonBorderLight 
                        addClassname="dropdown-toggle " 
                        type="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false" 
                    >
                        <Icon bootstrapIcon='list'/>
                    </ButtonBorderLight>
                    <ul className="dropdown-menu dropdown-menu-end border-1 border-gray-100">
                        <GradientGrayToWhiteButton>
                            Show on small screen
                        </GradientGrayToWhiteButton>
                        <DropDownItem href="/model/upload/">
                            <Icon bootstrapIcon='cloud-arrow-up'/>
                            Upload Models
                        </DropDownItem>
                        <DropDownItem href="/dataset/upload/">
                            <Icon bootstrapIcon='cloud-arrow-up'/>
                            Upload Datasets
                        </DropDownItem>
                        <DropDownItem href="/login/">
                            <Icon bootstrapIcon='door-open'/>
                            Log In
                        </DropDownItem>
                        <DropDownItem href="/logout/">
                            <Icon bootstrapIcon='door-closed'/>
                            Log Out
                        </DropDownItem>
                        <DropDownItem href="/signup/">
                            <Icon bootstrapIcon='door-closed'/>
                            Sign Up
                        </DropDownItem>
                        <DropDownItem href="/user/final-task-analytics/">
                            Final Task Analytics
                        </DropDownItem>                       
                        <DropDownItem href="/user/hitl-reinforced-feedback/">
                            HITL Reinforced Feedback
                        </DropDownItem>
                    </ul>
                </div>
                <div 
                    id="navbarTogglerDemo01"
                    className="collapse navbar-collapse" 
                >
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    </ul>
                </div>
            </WidthFullContainerFlex>
        </DisplayFlexContentCenterBorder>
    </>
    );
}