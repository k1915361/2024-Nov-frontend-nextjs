import { Suspense } from "react";
import Username from "./username";
import { BorderRoundShadowIcon, LinkDark, LinkDarkNoUnderline, LinkTextBlackNoUnderline } from "../home/page";

export function Icon({ children, bootstrapIcon="list", width=16, height=16, fill="currentColor", viewBox="0 0 16 16", ...props}) {
    return (
        <i 
        className={`bi bi-${bootstrapIcon}`} 
        width={`${width}`} 
        height={`${height}`} 
        fill={`${fill}`} 
        viewBox={`${viewBox}`} 
        {...props}
        >
            {children}
        </i>
    )
}

export function DropDownItem({ children, href, ...props }) {
    return (
        <li className="nav-item">
            <a 
                href={`${href}`} 
                className="dropdown-item" 
                {...props}
            >
                {children}
            </a>
        </li>
    )
}

export function DisplayFlexContentCenterBorder({ children, ...props }) {
    return (
        <div className="d-flex justify-content-center border border-light-subtle " {...props}>
            {children}
        </div>
    )
}

export function NavbarExpandLarge({ children, ...props }) {
    return (
        <nav className="navbar navbar-expand-lg" {...props}>
            {children}
        </nav>
    )
}

export function ContainerFluidGap1({ children, ...props }) {
    return (    
        <div className="container-fluid gap-1" {...props}>
            {children}
        </div>
    )
}

export function SmallShadowRound({ children, overrideClassname, ...props }) {
    return (    
        <div 
            className={`shadow-sm rounded p-2 ${overrideClassname}`} 
            {...props}
        >
            {children}
        </div>
    )
}

export function IconText({ children, overrideClassname, ...props }) {
    return (
        <span 
            className={`ms-1 ${overrideClassname}`} 
            style={{
                fontSize: '13px',
                fontWeight: '500',
            }} {...props}
        >
            {children}
        </span> 
    )
}

export function MarginStart1({ children, overrideClassname, ...props }) {
    return (
        <span className={`ms-1 ${overrideClassname}`} {...props}>
            {children}
        </span> 
    )
}

export function LinkDarkNoUnderlineIcon({ children, overrideClassname, href, bootstrapIcon, ...props }) {
    return (
        <LinkDarkNoUnderline 
            href={href}
            overrideClassname={`mx-2 ${overrideClassname}`}             
            {...props}
        >
            <Icon bootstrapIcon={bootstrapIcon}/>
                {children}
        </LinkDarkNoUnderline> 
    )
}

export function LinkDarkNoUnderlineIconText({ children, overrideClassname, href, bootstrapIcon, textProps, ...props }) {
    return (
        <LinkDarkNoUnderlineIcon 
        href={href}
        overrideClassname={`shadow-sm rounded p-2 ${overrideClassname}`}
        bootstrapIcon={bootstrapIcon}
        {...props}
        >
            <IconText {...textProps}>
                {children}
            </IconText>
        </LinkDarkNoUnderlineIcon> 
    )
}


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
                            <SmallShadowRound>
                                😊 <span className="ms-1 fw-bold fs-6">
                                    Logo
                                </span>
                            </SmallShadowRound>
                        </a>
                    </div>
                    <form className="d-flex" role="search">
                        <div className="input-group ">
                            <div className="form">
                                <input type="search" 
                                id="form1" 
                                className="form-control border-1 shadow-sm" 
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
                        Start 
                        a New Optimisation Task
                    </LinkDarkNoUnderlineIconText>
                    <LinkDarkNoUnderlineIconText 
                        href="/user/previous-tasks/"
                        bootstrapIcon='clipboard2-check'
                    >
                        Previous
                        Tasks
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