import Image from "next/image"
import { Button } from "./ui/button"

const GetStarted = () => {
  return (
    <section className="mt-20">
      <div className='grid gap-8 md:grid-cols-2 max-w-6xl justify-center mx-auto mt-14 bg-[#2e2e2e] rounded-2xl p-10'>
          <div className='h-auto w-full px-10 pb-10 text-white mb-10'>
          <Image 
              src="/getStarted.png"
              alt="custom solutions"
              height={350}
              width={350}
              className='cover items-center justify-center -mt-32'
              />
              <h2 className='justify-start font-extrabold text-3xl mt-5'>How to Choose the perfect Wallpaper</h2>
              <p className='py-5'>Achieve Stunning Interiors in 3 Simple Steps</p>
              <Button 
                variant="default"
                size="lg"
                className="bg-white text-black"
              >Sign up</Button>
          </div>
          <div className='h-full w-full items-center justify-center mx-auto grid grid-cols-1'>
              <div className="grid grid-cols-1 text-white">
                <h2 className='justify-start font-extrabold text-3xl my-5'>Step 1</h2>
                <p>Schedule a Consultation</p>
                <div className="w-1/2 border-t-2 border-gray-400 mt-10" />
              </div>
              <div className="grid grid-cols-1 text-white">
                <h2 className='justify-start font-extrabold text-3xl my-5'>Step 2</h2>
                <p>Our experts will guide you in selecting the ideal wallcovering for your space</p>
                <div className="w-1/2 border-t-2 border-gray-400 mt-10" />
              </div>
              <div className="grid grid-cols-1 text-white">
                <h2 className='justify-start font-extrabold text-3xl my-5'>Step 3</h2>
                <p>Experience Beautiful Interiors</p>
               
              </div>
              
          </div>
      </div>
    </section>
  )
}

export default GetStarted