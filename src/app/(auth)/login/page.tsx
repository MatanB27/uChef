"use client"

import { CustomInput } from '@/components/custom-input/custom-input'
import styles from './page.module.scss'
import LoginIcon from '@/assets/icons/login.svg'
import { FormEvent } from 'react'
type LoginProps = {

} 
export default function Login(props: LoginProps) {

    const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        console.log(e.target);
    }
    return (
        <main className={styles['login-container']}>
            <div className={styles['login-img-container']}>
                <img src={LoginIcon.src} alt={'login'}/>
            </div>

            <form className={styles['form']}>
                <h1 className={styles['title']}>Login</h1>
                <CustomInput
                    className={styles['custom-input']}
                    value={''}
                    placeholder={'Email'}
                    autoFocus={true}
                    onChange={() => {console.log('xd'); }}
                />

                <CustomInput
                    className={styles['custom-input']}
                    value={''}
                    placeholder={'Password'}
                    autoFocus={true}
                    onChange={() => {console.log('xd');
                    }}
                />
            </form>
        </main>
    )
}