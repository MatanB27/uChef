import { Metadata } from 'next'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer';
import './style.css'
import { LOGIN_ROUTE, REGISTER_ROUTE } from './_lib/constants';

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

  const navRoutes = [
    {
        key: 'Login',
        route: LOGIN_ROUTE,
    },
    {
        key: 'Register',
        route: REGISTER_ROUTE,
    }
]
  return (

    <html lang="en">
      <body>
        <Header headerRoutes={navRoutes}/>
          {children}
        <Footer footerRoutes={navRoutes}/>
      </body>
    </html>
  )
}
