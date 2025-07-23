import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Himanshu Hegde',
  description: 'Portfolio website for Himanshu Hegde',
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
