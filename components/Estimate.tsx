import Image from "next/image"
import Button from "./Button"

const Estimate = () => {
  return (
      <section id="contact" className='grid gap-8 md:grid-cols-2 max-w-6xl justify-center mx-auto my-24 bg-[#2e2e2e] rounded-xl'>
       
        <div className='flex flex-col h-auto w-full p-10 text-white justify-center items-center'>
          <h2 className='flex justify-center text-4xl font-black my-5'>Over 150k Design</h2>
           <h2 className='justify-center font-bold my-5'>Choose Mica Interiors for Quality Wallcoverings</h2>
           <p className="text-4xl font-black my-10">+1(833)-586-1220</p>
           <p className="text-2xl font-black my-10">contact@micainteriors.com</p>
           {/* <Button 
            type="button" 
            title="Call Us Today" 
            variant="btn_gradient" 
          /> */}
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