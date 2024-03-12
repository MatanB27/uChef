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

      <div className={styles['circle-one']}/>

      <div className={styles['content']}>
        {children}
      </div>

      <div className={styles['bottom-background']}/>
    </div>
  )
}
