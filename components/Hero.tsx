import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row text-white mt-32">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/brush.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Welcome to Mica Interiors Inc, Your Premier Interior Finishing Company in Canada</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        We specialize in transforming spaces with precision and creativity, offering exceptional craftsmanship and innovative solutions for residential, commercial, and institutional projects. Let us bring your vision to life with unparalleled attention to detail and a commitment to excellence.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            1012
            <span className="regular-16 lg:regular-20 ml-1">Successful Projects</span>
          </p>
        </div>

        <Link href="#contact" className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get an Estimate" 
            variant="btn_gradient" 
          />
          {/* <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          /> */}
        </Link>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[368px] flex-col gap-8 rounded-3xl px-7 py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">The Leading</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Wall Finishing Company</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="bold-20 block text-gray-20">Toronto</p>
              <p className="text-white">+1(416)-820-8846</p>
            </div>
            <div className="flex flex-col">
              <p className="bold-20 block text-gray-20">Vancouver</p>
              <p className="text-white">+1(833)-586-1220</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero