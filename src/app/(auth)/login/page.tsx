import styles from './page.module.scss'

type LoginProps = {

} 
export default function Login(props: LoginProps) {
    return (
        <main className={styles['login-container']}>
            Login
        </main>
    )
}