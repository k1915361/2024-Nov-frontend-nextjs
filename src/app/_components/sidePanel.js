import { ApplyFiltersButton, ClosePanelButton } from "../datasets/togglePanelButton"

export default function SidePanel({ children, isPanelOpen, togglePanel }){
    return (
        <section 
            className={`pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50 to-white 
                fixed overflow-y-auto overflow-x-hidden z-40 inset-0 !px-4 !pt-4     
            lg:pr-6 2xl:pr-12            
            ${isPanelOpen ? 'block' : 'hidden lg:block'}
            ${isPanelOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}
        >
            <div className="mb-4 flex items-center justify-between lg:hidden">
                <div className="text-base font-semibold ">
                    Edit filters
                </div>
                <ClosePanelButton 
                    togglePanel={togglePanel}
                />
            </div>
            {children}
            <div
                className="fixed inset-x-4 bottom-0 flex h-16 items-center border-t border-gray-200 bg-white dark:bg-gray-950 lg:hidden"
            >
                <ApplyFiltersButton />
            </div>
        </section>
    )
}

export function SidePanelMobile({children}) {    
    return (
        <section className="pt-8 p-5 m-5 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50 to-white hidden lg:block fixed overflow-y-auto overflow-x-hidden z-40 inset-0 !px-4 !pt-4 
        lg:pr-6 2xl:pr-12">
            {children}
        </section>
    )
}
