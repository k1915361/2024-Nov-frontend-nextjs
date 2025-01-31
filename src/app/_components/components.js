export function Text2ndarySmall({ children, ...props }) {
    return (
        <span className="text-body-secondary text-sm" {...props}>{children}</span>
    );
}export function LinkText({ children, type = 'model', id = 0, ...props }) {
    return (
        <a className="fw-semibold" href={`/${type}/${id}`} {...props}>{children}</a>
    );
}

export function LinkDark({ children, href, ...props }) {
    return (
        <a
            className="link-dark link-underline-opacity-25 link-underline-opacity-100-hover"
            href={href}
            {...props}
        >
            {children}
        </a>
    );
}

export function LinkGrayHoverUnderline({ children, href, ...props }) {
    return (
        <a
            className="text-gray-500 hover:underline"
            href={href}
            {...props}
        >
            {children}
        </a>
    );
}

export function LinkTextNormal({ children, type = 'model', id = 0, ...props }) {
    return (
        <a className="" href={`/${type}/${id}`} {...props}>{children}</a>
    );
}

export function LinkTextSecondaryNoUnderline({ children, type = 'model', id = 0, ...props }) {
    return (
        <a
            className="link-secondary link-underline link-underline-opacity-0 fw-normal fs-5"
            href={`/${type}/${id}`}
            {...props}
        >
            {children}
        </a>
    );
}

export function LinkTextBlackNoUnderline({ children, type = 'model', id = 0, ...props }) {
    return (
        <a
            className="link-body-emphasis link-underline link-underline-opacity-0 fw-medium fs-5"
            href={`/${type}/${id}`}
            {...props}
        >
            {children}
        </a>
    );
}

export function BoldHeading4({ children, overrideClassname, ...props }) {
    return (
        <div
            className={`fw-semibold fs-4 ${overrideClassname}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function LinkDarkBoldNoUnderline({ children, type = 'model', id = 0, ...props }) {
    return (
        <a
            className="link-body-emphasis link-underline link-underline-opacity-0 fs-5 fw-bolder"
            href={`/${type}/${id}`}
            {...props}
        >
            {children}
        </a>
    );
}

export function LinkDarkNoUnderline({ children, type = 'model', id = 0, overrideClassname, ...props }) {
    return (
        <a
            className={`link-body-emphasis link-underline link-underline-opacity-0 ${overrideClassname}`}
            href={`/${type}/${id}`}
            {...props}
        >
            {children}
        </a>
    );
}

export function ListItemBox({ children, type = 'model', ...props }) {
    return (
        <li style={{ whiteSpace: "nowrap" }} {...props}>
            {children}
        </li>
    );
}

export function ListItemDivBox({ children, type = 'model', ...props }) {
    return (
        <div style={{ whiteSpace: "nowrap" }} {...props}>
            {children}
        </div>
    );
}

export function OverviewCardWrapper({ children, ...props }) {
    return (
        <div className='flex items-center justify-between gap-4 p-2 rounded-lg 
            bg-linear-to-r from-gray-50 to-white shadow-sm ms-0 m-3 py-3 
            border-1 border-gray-100' style={{ whiteSpace: "nowrap" }} {...props}>
            {children}
        </div>
    );
}

export function ButtonBorderLightGray({ children, ...props }) {
    return (
        <div className='p-2 px-3 rounded-lg ms-0 border-1 border-gray-200 text-gray-500 hover:text-gray-700 focus:outline-none'  
            style={{ whiteSpace: "nowrap" }} 
            {...props}
        >
            {children}
        </div>
    );
}

export function Input({ children, ...props }) {
    return (
        <input 
            className="border-1 border-gray-100 w-full shadow-inner shadow-gray-100 rounded-md px-4 py-2 dark:bg-gray-850 pl-8 form-input-alt 
                h-9 pr-3 focus:shadow-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            {...props}
        />
    )
}

export function HoverUnderline({ children, ...props }) {
    return (
        <span 
            className="hover:underline"
            {...props}
        >
            {children}
        </span>
    )
}

export function Row({ children, ...props }) {
    return (
        <div className="row" {...props}>
            {children}
        </div>
    );
}

export function Grid({ children, ...props }) {
    return (
        <div className="grid" {...props}>
            {children}
        </div>
    );
}

export function BorderRound({ children, ...props }) {
    return (
        <div className="border rounded m-1 p-3" {...props}>
            {children}
        </div>
    );
}

export function ColBorderRoundShadow({ children, ...props }) {
    return (
        <div className="col border border-light-subtle rounded m-1 p-3 shadow-sm"
            {...props}
        >
            {children}
        </div>
    );
}

export function BorderRoundShadow({ children, ...props }) {
    return (
        <div className="border border-light-subtle rounded m-1 p-3 shadow-sm"
            {...props}
        >
            {children}
        </div>
    );
}

export function BorderRoundShadowIcon({ children, overrideClassname, ...props }) {
    return (
        <div className={`border border-light-subtle rounded m-0 p-2 shadow-sm ${overrideClassname}`}
            {...props}
        >
            {children}
        </div>
    );
}
export function Icon({ children, bootstrapIcon = "list", width = 16, height = 16, fill = "currentColor", viewBox = "0 0 16 16", ...props }) {
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
    );
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
    );
}

export function DisplayFlexContentCenterBorder({ children, ...props }) {
    return (
        <div className="border-b border-gray-100 d-flex justify-content-center border border-light-subtle" {...props}>
            {children}
        </div>
    );
}

export function NavbarExpandLarge({ children, ...props }) {
    return (
        <nav className="navbar navbar-expand-lg" {...props}>
            {children}
        </nav>
    );
}

export function ContainerFluidGap1({ children, ...props }) {
    return (
        <div className="container-fluid gap-1" {...props}>
            {children}
        </div>
    );
}

export function SmallShadowRound({ children, overrideClassname, ...props }) {
    return (
        <div
            className={`shadow-sm rounded p-2 ${overrideClassname}`}
            {...props}
        >
            {children}
        </div>
    );
}

export function IconText({ children, overrideClassname, ...props }) {
    return (
        <span
            className={`ms-1 ${overrideClassname}`}
            style={{
                fontSize: '0.8rem',
                fontWeight: '500',
            }} {...props}
        >
            {children}
        </span>
    );
}

export function MarginStart1({ children, overrideClassname, ...props }) {
    return (
        <span className={`ms-1 ${overrideClassname}`} {...props}>
            {children}
        </span>
    );
}

export function LinkDarkNoUnderlineIcon({ children, overrideClassname, href, bootstrapIcon, ...props }) {
    return (
        <LinkDarkNoUnderline
            href={href}
            overrideClassname={`mx-2 ${overrideClassname}`}
            {...props}
        >
            <Icon bootstrapIcon={bootstrapIcon} />
            {children}
        </LinkDarkNoUnderline>
    );
}

export function LinkDarkNoUnderlineIconText({ children, overrideClassname, href, bootstrapIcon, textProps, ...props }) {
    return (
        <LinkDarkNoUnderlineIcon
            href={href}
            overrideClassname={`rounded p-2 ${overrideClassname}`}
            bootstrapIcon={bootstrapIcon}
            {...props}
        >
            <IconText {...textProps}>
                {children}
            </IconText>
        </LinkDarkNoUnderlineIcon>
    );
}

export function LogoText({ children, overrideClassname, ...props }) {
    return (
        <span 
            className={`ms-1 ps-0 ${overrideClassname}`} 
            style={{
                fontSize:'1.1rem', 
                fontWeight: '800'
            }}
            {...props}
        >
            {children}
        </span>
    )
}

export function LogoIconText({ children, overrideClassname, Tag='span', ...props }) {
    return (
        <DynamicTagComponent 
            className={`${overrideClassname}`} 
            style={{
                fontSize:'1.3rem'
            }}
            Tag={Tag}
            {...props}
        >
            {children}
        </DynamicTagComponent>
    )
}

export function DynamicTagComponent({ children, overrideClassname, Tag='span', ...props }) {
    return (
        <Tag 
            className={`${overrideClassname}`}             
            {...props}
        >
            {children}
        </Tag>
    )
}