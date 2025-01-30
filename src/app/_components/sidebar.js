import { Suspense } from "react";
import Username from "./username";
import { ContainerFluidGap1, DisplayFlexContentCenterBorder, DropDownItem, Icon, LinkDarkNoUnderlineIconText, LogoIconText, LogoText, NavbarExpandLarge, SmallShadowRound } from "./components";

export default function Sidebar({ children }) {
    return (
    <>
        <DisplayFlexContentCenterBorder>
            <NavbarExpandLarge>
                <ContainerFluidGap1>
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
                    <form className="d-flex" role="search">
                        <div className="input-group ">
                            <div className="form">
                                <input 
                                    type="search" 
                                    id="form1" 
                                    className="form-control border-light-subtle shadow-sm" 
                                    placeholder="Search models, datasets, users..."
                                />
                            </div>
                            <button type="submit" className="btn shadow-sm">
                                <Icon bootstrapIcon='search'/>
                            </button>
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
                        overrideClassname='ms-2'
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
                        <button 
                            className="btn dropdown-toggle shadow-sm" 
                            type="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                        >
                            <Icon bootstrapIcon='list'/>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">                            
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
                </ContainerFluidGap1>
            </NavbarExpandLarge>
        </DisplayFlexContentCenterBorder>
    </>
    );
}