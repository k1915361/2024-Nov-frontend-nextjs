import { GradientGrayToWhiteLinkButton, Icon } from "../components";
import { openedMap } from "./mobileNavHeaderPopupMenu";

export function MobileNavLinkButton({
    href,
    addButtonClassname='',
    bootstrapIcon,
    addIconClassname='',
    name
}) {
    return (
        <GradientGrayToWhiteLinkButton
            href={href}
            addClassname={` ${addButtonClassname}`}
            className="mr-2 text-sm border-1 border-gray-100 bg-linear-to-t from-gray-100 to-white md:flex lg:hidden mx-1 font-bold py-2 px-4 rounded hover:shadow-inner flex justify-center w-full"
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
        <ul className="grid grid-cols-2 content-center gap-1 ms-0 me-2 mb-3 ps-0"
            {...props}
        >
            {children}
        </ul>
    );
}

export function MobileNavHeaderProfilePanel({ children, ...props }) {
    return (
        <ul className="col-span-2 flex items-center p-2"
            {...props}
        >
            {children}
        </ul>
    );
}
