import { Metadata } from "next";
import styles from './layout.module.scss';
export const metadata: Metadata = {
  title: 'Login',
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
  
      <div className={styles['bottom-background']}/>
    </main>
  )
}
