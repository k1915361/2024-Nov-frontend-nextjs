
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
}export const downloadIcon = <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em" height="1em" viewBox="0 0 32 32">
    <path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z">
    </path>
</svg>;
export const folderIcon = <svg
    className="flex-none me-2 text-blue-400 fill-current mt-1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
>
    <path d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="currentColor"></path>
</svg>;
export const fileIcon = <svg
    className="flex-none me-2 text-gray-300 fill-current mt-1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    role="img"
    width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"
>
    <path d="M25.7 9.3l-7-7A.908.908 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.908.908 0 0 0-.3-.7zM18 4.4l5.6 5.6H18zM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6z" fill=""></path>
</svg>;
export function filePathToApiUrl(str) {
    return str.replace('asset/', 'tree/');
}
export function FileRouteView({ apiRoute, filename, children, baseApiRoute = '', icon = folderIcon, target = '', className = 'col-span-8 flex items-center hover:underline md:col-span-5 lg:col-span-4', ...props }) {
    return (
        <a href={`/${baseApiRoute}${apiRoute}/${filename}`} target={target} className={className} {...props}>
            {icon} {filename} {children}
        </a>
    );
}
export function ItemDataSize({ itemSize, unit = 'B' }) {
    return <span className="truncate max-sm:text-xs text-gray-400">{itemSize} {unit}</span>;
}

export function DownloadIcon() {
    return (
        <div className="ms-2 flex h-5 w-5 items-center justify-center rounded border text-gray-500 group-hover:bg-gray-50 group-hover:text-gray-800 group-hover:shadow-sm dark:border-gray-800 dark:group-hover:bg-gray-800 dark:group-hover:text-gray-300 xl:ml-4">
            {downloadIcon}
        </div>
    );
}
export function DataSizeAndDownloadIcon({ itemSize, ...props }) {
    return (
        <a className="group col-span-4 flex items-center justify-self-end truncate text-right font-mono text-[0.8rem] leading-6 text-gray-400 md:col-span-3 lg:col-span-2 xl:pr-10" title="Download file" download="" href="" {...props}
        >
            <ItemDataSize itemSize={itemSize} />
            <DownloadIcon />
        </a>
    );
}
export function FolderTreeContainerHeader() {
    return (
        <div className="from-gray-100 to-white flex items-baseline rounded-t-lg border border-b-0 bg-gradient-to-t px-3 py-2 dark:border-gray-800">
        </div>
    );
}
export function FolderListContainer({ children }) {
    return (
        <div className="mb-8 rounded-b-lg border-x-1 border-b-1 border-x-gray-200 border-b-gray-200 border-t-0 divide-y-1 divide-gray-200 dark:border-gray-800 dark:bg-gray-900">
            {children}
        </div>
    );
}
export function FileListItemContainer({
    apiRoute, baseApiRoute, itemName, children, icon, ...props
}) {
    return (
        <div className="grid h-10 grid-cols-12 place-content-center gap-x-3 border-t-gray-200 px-3 dark:border-t" {...props}>
            <FileRouteView
                baseApiRoute={baseApiRoute}
                apiRoute={apiRoute}
                filename={itemName}
                icon={icon} />
            {children}
        </div>
    );
}

