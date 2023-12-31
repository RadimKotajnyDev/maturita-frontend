import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Footer} from "@/components/Footer";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maturitní práce',
  description: 'Maturitní práce',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" data-theme="night">
      <body className={inter.className}>
        <div className="h-screen w-full bg-neutral">
          {/* <Navbar /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
