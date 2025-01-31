import React from 'react'
import Footer from './_components/footer';
import SidePanel from './_components/sidePanel';
import GridListSection from './_components/gridListSection';

export default function PageComponent({children}) {
 
  return (
        <div className={``}>
            <main className={`flex flex-1 flex-col`}>
                <div className='container relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full md:gap-6'>
                    <SidePanel/>
                    <GridListSection>
                        {children}
                    </GridListSection>
                </div>
            </main>
            <Footer/>        
        </div>
  );
}
