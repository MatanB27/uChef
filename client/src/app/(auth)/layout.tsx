import { Metadata } from "next";
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Autentication',
}

type AuthLayoutProps = {
  children: React.ReactNode,
}

export default function AuthLayout(props: AuthLayoutProps) {
  const {
    children,
  } = props

  return (
    <main className={styles['layout']}>
        {children}
    </main>
  )
}
