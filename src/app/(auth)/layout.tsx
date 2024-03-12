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
    <div className={styles['layout']}>
      <div className={styles['first-circle']}/>
      <div className={styles['second-circle']}/>
      
      {children}

      <div className={styles['bottom-color']}/>
    </div>
  )
}
