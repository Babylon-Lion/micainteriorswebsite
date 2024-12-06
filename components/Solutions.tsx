import Image from 'next/image'
import React from 'react'

const Solutions = () => {
  return (
    <section className='grid gap-8 md:grid-cols-2 max-w-6xl justify-center mx-auto pt-14'>
      <div className='flex h-full w-full items-center justify-center mx-auto'>
         <Image 
         src="/led-uv-printer.jpg"
         alt="custom solutions"
         height={350}
         width={350}
         className='cover items-center justify-center'
         />
      </div>
      <div className='h-auto w-full px-10 pb-10 text-white mb-10'>
         <h4 className='justify-start font-extrabold'>Custom Solutions</h4>
         <h2 className='justify-start font-extrabold text-3xl mt-5'>Enhance Your Space with custom made Finishing</h2>
         <p className='py-5'>At Mica Interiors, we recognize the significance of crafting spaces that are both unique and 
          welcoming. Our team of skilled professionals is committed to delivering top-tier finishes, ranging from drywall 
          to wallcoverings and everything in between, tailored specifically for your commercial projects. With extensive 
          expertise in transforming hotels, restaurants, offices, banks, and retail spaces, we offer customized solutions 
          that bring your vision to life with precision and style.</p>
      </div>
    </section>
  )
}

export default Solutions