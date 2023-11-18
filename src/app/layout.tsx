import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Bai_Jamjuree } from 'next/font/google'
import MainNav from '@/components/main-nav'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-jamjuree'
})

export const metadata = {
  title: 'Entropy Unit',
  description: 'Entropy Unit Game Development'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      {process.env.NODE_ENV === 'production' && (
        <Analytics />
      )}
      <body className={cn(
        'min-h-screen bg-[#121212] text-[#F2F2F2] antialiased',
        baiJamjuree.className
      )}
      >
        <div className='flex flex-col min-h-screen overflow-x-hidden'>
          <MainNav />
          <div className='flex flex-col flex-1 '>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
