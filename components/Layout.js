import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import nProgress from 'nprogress';

export default function Layout({children, footer = true, dark = false}) {
  const router = useRouter();

  useEffect(() => {
      const handleRouteChange = url => { 
          console.log(url);
          nProgress.start();
        }

      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', () => nProgress.done());

      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      }
  }, [])

  return (
    <div className={ dark ? 'bg-dark' : '' }>
        <Navbar />
        <main className='container py-4'>
          {children}
        </main>

        {
          footer && (
            <footer className="bg-dark text-light text-center">
              <div className="container p-4">
                  <h1>&copy; My Portfolio</h1>
                  <p>2000 - {new Date().getFullYear()}</p>
                  <p>All right Reserved</p>
              </div>  
            </footer>
          )
        } 
    </div>
  )
}
