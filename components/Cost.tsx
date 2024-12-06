
import Image from 'next/image'

const Cost = () => {
  return (
    <section className='grid gap-8 md:grid-cols-2 max-w-6xl justify-center mx-auto mt-14'>
     
      <div className='h-auto w-full px-10 pb-10 text-white mb-10'>
         <h4 className='justify-start font-extrabold'>Cost Effective Solutions</h4>
         <h2 className='justify-start font-extrabold text-3xl mt-5'>Access 150,000 commercial wallcovering design</h2>
         <p className='py-5'>Embark on a journey of design possibilities with access to our vast collection of 
         150,000 commercial wallcovering designs. At Mica Interiors Inc, we bring you a curated selection that 
         transcends trends, offering a diverse range of styles to suit every aesthetic. Whether you seek timeless 
         classics, contemporary chic, or avant-garde statements, our extensive portfolio caters to the unique 
         vision of each space. From corporate environments to hospitality settings, discover the perfect wallcovering 
         solution to elevate your interiors. Unleash creativity with unparalleled choice – because at Mica, we believe 
         every wall has a story, and it begins with your distinct design preference</p>
      </div>
      <div className='flex h-full w-full items-center justify-center mx-auto'>
         <Image 
         src="/micainteriors_warehouse.jpg"
         alt="custom solutions"
         height={350}
         width={350}
         className='cover items-center justify-center'
         />
      </div>
    </section>
  )
}
export default Cost
