import { Metadata } from 'next'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer';
import './style.css'
import { headers } from 'next/headers';
import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from './_lib/constants';
export const metadata: Metadata = {
  title: {
    default: 'uChef',
    template: '%s | uChef'
  },
  description: 'Explore, Share, and enjoy delicious recipes with uChef',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const headersList = headers()
  const pathname = headersList.get('x-pathname');
  
  const handleRoutesWithoutHeader = () => {
    const routes: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]
  }

  return (
    <html lang="en">
      <body>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
