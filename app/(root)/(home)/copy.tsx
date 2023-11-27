import Experts from "@/components/Experts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceCard from "@/components/ResourceCard"
import SearchForm from "@/components/SearchForm"
import { Button } from "@/components/ui/button"
import { getResources, getResourcesPlaylist } from '@/sanity/actions'

export const revalidate = 900;
const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  })

  const resourcesPlaylist = await getResourcesPlaylist();
  
  console.log(resourcesPlaylist)
  return (
    <>
     <Hero />
     {/* <section className="nav-padding w-full">
       <div className="flex-center relative min-h-[274px] 
       w-full flex-col rounded-xl bg-banner bg-cover 
       bg-center text-center">
         <h1 className="sm:heading1 heading2 mb-6 text-center text-white">Mica Interiors, Your Single Source of Wallcovering</h1>
       </div>
       <SearchForm />
     </section> */}
     <section className="flex-center w-full flex-col mt-6 sm:mt-20">
    <div className="flex w-full mx-auto max-w-2xl">
     <Experts />
     </div>

      <Header/>
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources?.length> 0? (
            resources.map((resource:any) =>(
              <ResourceCard 
              key={resource._id}
              title={resource.title}
              id={resource._id}
              image={resource.image}
              
             />
            ))
          ): <p className="body-regular text-white-400">Resource not Found</p>}
        </div>
     </section>
    </>
  )
}
export default Page