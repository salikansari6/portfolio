'use client'
import { Inter } from 'next/font/google'
import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import SnackbarContext, { SnackbarContextProvider } from "../contexts/SnackbarContext"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Snackbar from "../components/Snackbar"
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    const { snackbar } = useContext(SnackbarContext);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnackbarContextProvider>
          <Navbar />
          <div className="py-20 xl:py-24 2xl:py-10 min-h-screen">
            {children}
          </div>
          <Footer />
          {
            snackbar && (
              <Snackbar />
            )
          }
        </SnackbarContextProvider>
      </body>
    </html>
  )
} 