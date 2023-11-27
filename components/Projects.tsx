import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface ProjectProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  city: string;
}

const Project = ({ backgroundImage, title, subtitle, city }: ProjectProps) => {
  return (
    <div className={`h-[375px] w-full min-w-[375px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4 bg-black-400/20 px-5 py-2 rounded-lg w-full">
        <div className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
       
        <p className="bold-16 md:bold-20 text-white bg-black-400/30 rounded-xl px-10 py-3">{city}</p>
      </div>
     </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className=" 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="flex h-[375px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Project 
          backgroundImage="bg-bg-img-1"
          title="ScotiaBank"
          subtitle="Interior Finishing"
          city="Whistler, BC"
        />
        <Project 
          backgroundImage="bg-bg-img-2"
          title="RBC"
          subtitle="Interior Finishing"
          city="Langford, BC"
        />
         <Project 
          backgroundImage="bg-bg-img-3"
          title="RBC"
          subtitle="Interior Finishing"
          city="Richmond, BC"
        />
         <Project 
          backgroundImage="bg-bg-img-4"
          title="BMO"
          subtitle="Interior Finishing"
          city="Vancouver, BC"
        />
         <Project 
          backgroundImage="bg-bg-img-5"
          title="BMO"
          subtitle="Interior Finishing"
          city="Port Coquitlam, BC"
        />
         <Project 
          backgroundImage="bg-bg-img-6"
          title="Scotia Wealth"
          subtitle="Interior Finishing"
          city="Vancouver, BC"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-80 lg:mr-6">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Sample</strong>of past projects
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Our expert team with 75+ years of combined experience finished 100s of high profile clients with 100% satisfaction rate. 
          </p>
          <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects