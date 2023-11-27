import Image from "next/image"
import Button from "./Button"

const Estimate = () => {
  return (
      <section className='grid gap-8 md:grid-cols-2 max-w-6xl justify-center mx-auto my-24 bg-[#2e2e2e] rounded-xl'>
       
        <div className='flex flex-col h-auto w-full p-10 text-white justify-center'>
           
           <h2 className='justify-start font-extrabold text-3xl my-5'>Choose Mica Interiors for Quality Wallcoverings</h2>
           <Button 
            type="button" 
            title="Contact Us Today" 
            variant="btn_gradient" 
          />
        </div>
        <div className='flex h-full w-full items-center justify-center mx-auto'>
           <Image 
           src="/thousands_of_commercial_wallpaper_rolls.png"
           alt="custom solutions"
           height={350}
           width={350}
           className='cover items-center justify-center'
           />
        </div>
      </section>
  )
}

export default Estimate