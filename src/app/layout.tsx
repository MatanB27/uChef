import { Metadata } from 'next'
import './style.css'

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
  return (
    <html lang="en">
      <body>
          {children}
        </body>
    </html>
  )
}
