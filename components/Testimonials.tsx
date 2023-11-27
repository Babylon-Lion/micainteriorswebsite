import Image from "next/image"

const Testimonials = () => {
  return (
    <section className="flex flex-col my-24 text-white justify-center items-center mx-auto max-w-6xl">
      <h2 className='justify-start font-extrabold text-3xl my-5'>Clients Testimonials</h2>
      <p>Hear from Our Satisfied Clients</p>
      <div className="grid md:grid-cols-3 gap-10 mt-10">
        {/* Testimonial 1 */}
        <div className="bg-[#2e2e2e] p-5 rounded-xl max-w-xs items-center justify-center flex flex-col">
          <h3 className="font-semibold py-5">Impeccable. You can’t find the seam between wallpaper sheets. Thorough, perfect job</h3>
             <div className="flex items-center gap-2 mb-5">
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
            <h4>Sandy C</h4>
            <p>Owner</p>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-[#2e2e2e] p-5 rounded-xl max-w-xs items-center justify-center flex flex-col">
          <h3 className="font-semibold py-5">Great business men, I’m so happy with the insight and workmanship the owners put into what I had in mind. I would highly recommend Mica interiors to anyone.</h3>
             <div className="flex items-center gap-2 mb-5">
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
            <h4>Tiger Grooming</h4>
            <p>Owner</p>
        </div>
        {/* Testimonial 3 */}
        <div className="bg-[#2e2e2e] p-5 rounded-xl max-w-xs items-center justify-center flex flex-col">
          <h3 className="font-semibold py-5">Great variety of wallpapers showcased, options for anyone. Very satisfied with my purchase</h3>
             <div className="flex items-center gap-2 mb-5">
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
            <h4>Marco Pasini</h4>
            <p>Owner</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials