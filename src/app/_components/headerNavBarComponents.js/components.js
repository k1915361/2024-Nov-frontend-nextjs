import { GradientGrayToWhiteLinkButton, Icon } from "../components";
import { openedMap } from "./mobileNavHeaderPopupMenu";

export function MobileNavLinkButton({
    href,
    addButtonClassname='',
    bootstrapIcon,
    addIconClassname='',
    name,
    title,
    ...props
}) {
    return (
        <GradientGrayToWhiteLinkButton
            href={href}
            addClassname={` ${addButtonClassname}`}
            className="mr-2 text-sm border-1 border-gray-200 bg-linear-to-t from-gray-100 to-white md:flex lg:hidden mx-1 font-normal py-2 px-4 rounded hover:shadow-inner flex justify-center w-full"
            title={title}
            {...props}
        >
            <Icon
                bootstrapIcon={bootstrapIcon}
                addClassname={`me-1 ${addIconClassname}`}
            >
            </Icon>
            <span>
                {name}
            </span>
        </GradientGrayToWhiteLinkButton>
    );
}

export function MobileBlockLargeScreenHidden({ children, addClassname, ...props }) {
    return (
        <span className={`md:block lg:hidden ${addClassname}`}
            {...props}
        >
            {children}
        </span>
    )
}

export function MobileNavMain({ children, addClassname, ...props }) {
    return (
        <nav aria-label="Main" className={`${addClassname}`}
            {...props}
        >
            {children}
        </nav>
    )
}
export function MobileNavButtonsPanelGrid({ children, ...props }) {
    return (
        <ul className="grid grid-cols-2 content-center gap-2.5 mx-2 mb-3 ps-0"
            {...props}
        >
            {children}
        </ul>
    );
} 

export function MobileNavHeaderProfilePanel({ children, ...props }) {
    return (
        <li className="col-span-2 flex items-center p-3"
            {...props}
        >
            {children}
        </li>
    );
}

export function SectionHeader({ children, name, ...props }) {
    return (
        <div className="-mx-2 flex h-7 items-center bg-gradient-to-r to-white px-2 font-semibold dark:via-gray-925 dark:to-gray-925 dark:text-gray-200 text-purple-800 from-purple-50 dark:from-purple-900"
                {...props}
            >
            {name}
            {children}
        </div>
    );
}

export function MobileNavProfileUsername({ children, href, name, ...props }) {
    return (
        <a className="group leading-tight" href={href} d="/EePark"
            {...props}
        >
            {children}
            <div className="text-xs text-gray-500">
                Profile
            </div> 
            <div className="group-hover:underline">
                {name}                
            </div>
        </a>
    );
}

export function MobileNavProfileIcon({ children, href, name, ...props }) {
    return (
        <img className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-full h-10 w-10 me-3 flex-none overflow-hidden"
        >
        </img>
    )
}