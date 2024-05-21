import Cost from "@/components/Cost";
import Estimate from "@/components/Estimate";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";


export const revalidate = 900;
const Page = () => {
 
  return (
    <>
     <Hero />
     <h2 className="flex w-full justify-center items-center pt-14 font-extrabold text-3xl text-white">Our Partners</h2>
     <Partners />
     
     {/* <Experts /> */}
     <Solutions />
     <Cost />
     <GetStarted />
     <Testimonials />
     <h2 className="flex w-full justify-center items-center font-extrabold text-3xl text-white">Past Projects</h2>
     <Projects />
     <Estimate/>
     
    </>
  )
}
export default Page