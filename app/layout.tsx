import type { Metadata } from 'next'
import SplashCursor from '@/components/ui/test'


import './globals.css'

export const metadata: Metadata = {
  title: 'Himanshu Hegde | Full Stack Developer',
  icons: {
    icon: '/favicon.ico',
  },
  description: 'Portfolio website for Himanshu Hegde, a full stack developer specializing in modern web technologies like React, Node.js, and Next.js.',
  keywords: ['Himanshu Hegde', 'portfolio', 'web developer', 'full stack', 'Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Himanshu Hegde' }],
  creator: 'Himanshu Hegde',
  applicationName: 'Himanshu Hegde Portfolio',
  robots: 'index, follow',
  openGraph: {
    title: 'Himanshu Hegde | Full Stack Developer',
    description: 'Explore projects, skills, and background of Himanshu Hegde, a passionate web developer.',
    url: 'https://himanshu-hegde.vercel.app/',
    siteName: 'Himanshu Hegde Portfolio',
    images: [
      {
        url: 'https://himanshu-hegde.vercel.app/Himanshu_Hegde.jpeg',
        width: 1200,
        height: 630,
        alt: 'Himanshu Hegde Portfolio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  other: {
    "google-site-verification" :"5LPwqH_ksVlTHFH9GSPn6q-IYTjwLVi-D_ibabBHcrk",

  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SplashCursor COLOR_UPDATE_SPEED={1000000}/>
        {children}</body>
    </html>
  )
}
