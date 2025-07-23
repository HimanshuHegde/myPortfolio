import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Himanshu Hegde | Full Stack Developer',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
