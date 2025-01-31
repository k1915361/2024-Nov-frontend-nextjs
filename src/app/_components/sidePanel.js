export default function SidePanel({ children }){
    return (
        <section className="pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50-to-white hidden lg:block"> 
            <div className="mb-4 flex items-center justify-between lg:hidden">
                {children}
            </div>        
        </section>
    )
}