import { GradientGrayToWhiteButton } from "../_components/components"

export function ToggleButton({ children, togglePanel, addClassname='', ...props }) {
    return (
        <GradientGrayToWhiteButton 
            addClassname={addClassname}
            onClick={togglePanel}
            {...props}
        >
            {children}
        </GradientGrayToWhiteButton>
    )
}


export default function TogglePanelButton({ togglePanel }) {

    return (
        <ToggleButton
            togglePanel={togglePanel} 
        >
            Open Filters
        </ToggleButton>
    )
}

export function ApplyFiltersButton({ togglePanel }) {
    return (
        <button
            className="mr-2 text-xs block border-1 border-gray-100 bg-linear-to-t from-gray-100 to-white md:block lg:hidden m-1 z-50 py-2 px-4 rounded hover:shadow-inner"
            onClick={togglePanel}
        >
            Apply Filters
        </button>
    )
}


export function ClosePanelButton({ isPanelOpen, togglePanel }) {

    return (
        <button
            className="text-xl block fixed md:block lg:hidden m-1 right-4 z-50 font-bold p-1 rounded"
            onClick={togglePanel}
        >
                <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1.1em" height="1.1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                    <path d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z" fill="currentColor">
                    </path>
                </svg>
        </button>
    )
}