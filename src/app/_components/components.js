
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

export function LinkGrayHoverUnderline({ children, addClassname='', href, ...props }) {
    return (
        <a
            className={`text-gray-500 hover:underline  ${addClassname}`}
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

export function OverviewCardWrapper({ children, ...props }) {
    return (
        <div className='items-center justify-between gap-4 p-2 rounded-lg truncate
            bg-linear-to-r from-gray-50 to-white shadow-2xs ms-0 my-2 
            border-1 border-gray-100 hover:bg-gray-50 in-hover:bg-gray-50' 
            style={{ whiteSpace: "nowrap" }} 
            {...props}
        >
            {children}
        </div>
    );
}

export function ButtonBorderLight({ children, addClassname='', ...props }) {
    return (
        <button 
            className={`py-2 px-3 ms-0 border-1 border-gray-100 rounded
                text-gray-500 hover:text-gray-700 focus:outline-none 
                ${addClassname}`
            } 
            style={{ whiteSpace: "nowrap" }} 
            {...props}
        >
            {children}
        </button>
    );
}

export function FlexContainer({ children, ...props }) {
    return (
        <div
            className={`flex gap-1 text-sm flex-wrap mt-1.5 mb-5`}
            {...props}
        >
            {children}
        </div>

    )
}

export const boolHiddenMap = {
    true: 'hidden',
    false: '',
}

export function HiddenFlexContainer({hidden=true}){
    return (
        <div className={`mb-4 flex items-center justify-between ${hidden && 'lg:'}${boolHiddenMap[hidden]} `}>
        </div> 
    )
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

export function ColumnCard({ children, ...props }) {
    return (
        <div className="col border-1 border-gray-100 rounded m-1 p-3 shadow-2xs"
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
        <header className="border-b border-gray-100" {...props}>
            {children}
        </header>
    );
}

export function WidthFullContainerFlex({ children, ...props }) {
    return (
        <div className="w-full px-4 container flex flex-wrap items-center py-1 gap-y-1" {...props}>
            {children}
        </div>
    );
}

export function IconText({ children, overrideClassname, ...props }) {
    return (
        <span
            className={`ms-1 ${overrideClassname}`}             
            {...props}
        >
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

/** param='': IMPORTANT NOTE: 
 * Giving an empty string prevents undefined values and technical issues: e.g. HTML render Server-Client mismatch. 
 * */
export function BorderLightFullWidth({ children, addClassname='', ...props }) {
    return (
        <div
            className={`border-1 border-gray-100 w-full rounded-sm p-2 dark:bg-gray-850 ${addClassname}`}
            {...props}
        >
            {children}
        </div>
    )
}

export function BorderLight({ children, addClassname='', ...props }) {
    return (
        <div
            className={`border-1 border-gray-100 rounded-sm p-2 dark:bg-gray-850 ${addClassname}`}
            {...props}
        >
            {children}
        </div>
    )
}

export function LinkDarkNoUnderlineIconText({ children, overrideClassname, href, bootstrapIcon, textProps, ...props }) {
    return (
        <LinkDarkNoUnderlineIcon
            href={href}
            overrideClassname={`flex rounded p-1 text-nowrap ${overrideClassname}`}
            bootstrapIcon={bootstrapIcon}
            {...props}
        >
            <IconText 
                {...textProps}
            >
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

export function BadgeButton({children, selected=false}) {
    
    return (
        <button 
            className={`flex items-center whitespace-nowrap rounded px-2 
            ${selected ? 
                'bg-black text-white dark:bg-gray-800' : 
                'text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300'
            } 
            `}
        >
                {children}
        </button>
    )
} 

export function DotSeparator() {    
    return (
        <span className="px-1 text-gray-300 dark:text-gray-300">•</span>
    )
}
export function ColInvisibleBox({ children, ...props }) {
    return (
        <div className={colInvisibleBoxClass} {...props}>
            {children}
        </div>
    );
}export const colInvisibleBoxClass = "col p-3 mb-5 rounded me-3";
export const rowBoxClass = "row p-3 mb-5 bg-body rounded border border-light-subtle";
export function RowBox({ children, ...props }) {
    return (
        <div className={rowBoxClass} {...props}>
            {children}
        </div>
    );
}
export function RowGap0({ children, ...props }) {
    return (
        <div
            className="row gap-0"
            {...props}
        >
            {children}
        </div>
    );
}

export function EmptyComponent({...props}) { 
    return (
        <></>
    )
}

export function MainFlexColumnContainer({children, ...props}) {
    return (
        <main 
            className={`flex flex-1 flex-col`} 
            {...props}
        >
            {children}
        </main>
    )
}

export function DivFlexColumnGridContainer({children, ...props}) {
    return (
        <div className='container relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full md:gap-6'
            {...props}
        >
            {children}
        </div>
    )
}
