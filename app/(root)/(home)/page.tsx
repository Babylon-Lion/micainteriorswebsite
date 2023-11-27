import Cost from "@/components/Cost";
import Estimate from "@/components/Estimate";
import Experts from "@/components/Experts";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import ResourceCard from "@/components/ResourceCard"
import SearchForm from "@/components/SearchForm"
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
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
     <h2 className="flex w-full justify-center items-center font-extrabold text-3xl text-white">Our Partners</h2>
     <Partners />
     
     {/* <Experts /> */}
     <Solutions />
     <Cost />
     <GetStarted />
     <Testimonials />
     <h2 className="flex w-full justify-center items-center font-extrabold text-3xl text-white">Past Projects</h2>
     <Projects />
     <Estimate />
     
    </>
  )
}
export default Page