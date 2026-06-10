import type { Metadata } from 'next'
import { Open_Sans, Oswald } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Amit Shah | Official Website | Shri Amit Shah',
  description:
    'Official website of Shri Amit Shah — Union Home Minister & Minister of Cooperation, Government of India. BJP National President, Member of Parliament from Gandhinagar.',
  keywords: 'Amit Shah, BJP, Home Minister, Gandhinagar, India, politician',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${oswald.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
