import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Toaster } from 'react-hot-toast'
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Toaster position="bottom-right" toastOptions={{ duration: 300}} />
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default layout