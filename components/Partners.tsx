
import Image from "next/image";

interface PartnerProps {
   backgroundImage: string; 
    
}
const Partner = ({ backgroundImage }: PartnerProps) => {
  return (
    <div className={`h-[135px] w-full ${backgroundImage} bg-no-repeat`}>
      
    </div>
  )
}
const Partners = () => {
  return (
    <section className="text-white w-2/3 mx-auto relative flex flex-col py-10 lg:py-20 xl:mb-20 justify-center">
      
     
      <div className="flex h-[135px] min-h-[135px] w-full
      items-center justify-center gap-8 overflow-x-auto">
     
         <Partner 
         backgroundImage="bg-bg-scotia"
          />
         <Partner 
         backgroundImage="bg-bg-rbc"
       />
        <Partner 
         backgroundImage="bg-bg-bmo"
       />
        <Partner 
         backgroundImage="bg-bg-purelife"
       />
        <Partner 
         backgroundImage="bg-bg-wrm"
       />
        <Partner 
         backgroundImage="bg-bg-onni"
       />
       <Partner 
         backgroundImage="bg-bg-onSite"
       />
      </div>
    </section>
  )
}

export default Partners
{/* <Image 
      src="/scotia.jpg"
      alt="Scotia Bank -Whistler"
      width={100}
      height={70}
      className="rounded-xl"
      /> */}