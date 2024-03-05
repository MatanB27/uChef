import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

export const metadata = {
  title: 'Authentication',
  description: 'Authenticate!',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
