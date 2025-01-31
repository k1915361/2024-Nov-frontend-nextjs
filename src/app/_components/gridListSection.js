export default function GridListSection({ children }){
    return (
        <section className="pt-8 border-gray-100 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
            <div className="mb-4 items-center space-y-3 md:flex md:space-y-0 lg:mb-6">
                <div className="flex items-center text-lg">
                </div>                    
            </div>
            {children}
        </section>
    )
}