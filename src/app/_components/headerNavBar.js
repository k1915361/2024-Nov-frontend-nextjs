import { Suspense } from "react";
import Username from "./username";
import { ButtonBorderLight, DisplayFlexContentCenterBorder, DropDownItem, Icon, Input, LinkDarkNoUnderlineIconText, LogoIconText, LogoText, WidthFullContainerFlex } from "./components";

export default function HeaderNavBar({ children }) {
    return (
    <>
        <DisplayFlexContentCenterBorder>
            <WidthFullContainerFlex>
                <div className="d-flex me-3">
                    <a href="/home/" 
                        className="link-dark text-dark link-underline-dark link-underline-opacity-0"
                    >
                        <LogoIconText className="fw-bold" style={{fontSize:'1.3rem'}}>
                            😊 
                        </LogoIconText>
                        <LogoText className="ms-1 ps-0 " style={{fontSize:'1.1rem', fontWeight: '800'}}>
                            Logo
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
                >
                    Start a New Optimisation Task
                </LinkDarkNoUnderlineIconText>
                <LinkDarkNoUnderlineIconText 
                    href="/user/previous-tasks/"
                    bootstrapIcon='clipboard2-check'
                >
                    Previous Tasks
                </LinkDarkNoUnderlineIconText>
                <LinkDarkNoUnderlineIconText 
                    href="/user/models/"
                    bootstrapIcon='collection'
                >
                    My Models
                </LinkDarkNoUnderlineIconText>
                <LinkDarkNoUnderlineIconText 
                    href="/user/datasets/pages/page-range?page=1"
                    bootstrapIcon='collection'
                >
                    My Datasets
                </LinkDarkNoUnderlineIconText>
                <div>
                    <Suspense>
                        <Username/>
                    </Suspense>
                </div>
                <div className="dropdown-center">
                    <ButtonBorderLight 
                        addClassname="dropdown-toggle " 
                        type="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        <Icon bootstrapIcon='list'/>
                    </ButtonBorderLight>
                    <ul className="dropdown-menu dropdown-menu-end border-1 border-gray-100">                            
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
                        <DropDownItem href="/user/final-task-analytics/">
                            Final Task Analytics
                        </DropDownItem>                       
                        <DropDownItem href="/user/hitl-reinforced-feedback/">
                            HITL Reinforced Feedback
                        </DropDownItem>
                        <DropDownItem href="/">
                            Root
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