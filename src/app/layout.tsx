import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Bai_Jamjuree } from 'next/font/google'

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-jamjuree'
})

export const metadata = {
  title: 'Entropy Unit (soon)',
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
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  )
}
