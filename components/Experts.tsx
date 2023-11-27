import Image from "next/image"
import { Button } from "./ui/button"
import { buttonVariants } from "./ui/button"
const Experts = () => {
  return (
   
      
    <div className="flex flex-col gap-6 border border-gray-400 bor rounded-2xl h-[273] w-full text-white-400 p-16 ">
    <Image 
        src={"/experts.png"}
        alt="Experts"
        width={375}
        height={375}
        className="justify-end right-0 -mb-10"
        />
        <h1 className="flex justify-start text-2xl font-bold">Meet Our Expert Team</h1>
        <p>
            75 Years of Combined Experience, Dedicated teams both in BC and Ontario for Commercial Wallcovering
        </p>
        <Button variant="default" className="w-1/3 justify-start text-center">Get Started</Button>
    </div>
    
  )
}

export default Experts



