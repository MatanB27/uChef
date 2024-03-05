import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'jeff'
}

export default function CheckLayout({
  children,
  users,
  revenue,
  notification
}: {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode
    notification: React.ReactNode
}) {
  return (
    <div>
        <div>{children}</div>
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notification}</div>
    </div>
  )
}
