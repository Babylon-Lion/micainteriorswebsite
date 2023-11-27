import Image from "next/image"
import { Card } from "./ui/card"


const Header = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col w-full rounded-xl mb-6 text-white justify-center items-center">
     <h1 className="text-2xl font-bold p-3">Commercial Wallcovering</h1>
       <div className="rounded-2xl">
         <Image src="/thousands_of_commercial_wallpaper_rolls.png"
           alt="Commercial Wallcovering"
           width={475}
           height={300}
           className="rounded-xl"
        />

        </div>
     </div>

     <div className="flex flex-col w-full rounded-xl mb-6 text-white justify-center items-center">
     <h1 className="text-2xl font-bold p-3">Residential Wallcovering</h1>
       <div className="rounded-2xl">
         <Image src="/residential-wallpaper.png"
           alt="Residential Wallpaper"
           width={475}
           height={300}
           className="rounded-xl"
        />

        </div>
     </div>

     <div className="flex flex-col w-full rounded-xl mb-6 text-white justify-center items-center">
     <h1 className="text-2xl font-bold p-3">Wallpaper Installation</h1>
       <div className="rounded-2xl">
         <Image src="/female-wallpaper-installer.png"
           alt="female wallpaper installer"
           width={475}
           height={300}
           className="rounded-xl"
        />

        </div>
     </div>
    </header>
  )
}

export default Header