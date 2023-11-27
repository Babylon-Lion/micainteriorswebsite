import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Mica Interiors Inc',
  description: 'Your Single Source of Commercial Wallcoverings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <main className='min-h-screen bg-[#161616]
      font-poppins relative overflow-hidden'>
        {children}
      </main>
    </html>
  )
}
