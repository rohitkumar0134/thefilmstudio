"use client"
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SplashScreen from './components/SplashScreen'
import 'aos/dist/aos.css';
import { SnackbarProvider } from 'notistack'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  const giveChildrenAccToRoute = () => {
    if (isLoading ) {
      return <SplashScreen finishLoading={() => setIsLoading(false)} />;
    }
     else {
      return (
        <>
          {children}
        </>
      );
    }
  }

  return (
    <html lang="en">
      <head>
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />

   
</head>
      <body className={`${inter.className} bg-stone-900 font-serif`}>
      <SnackbarProvider autoHideDuration={2000} 
       anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}>
      {giveChildrenAccToRoute()}
      </SnackbarProvider>
      </body>
    </html>
  )
}
