"use client"

import { CustomInput } from '@/components/custom-input/custom-input'
import styles from './page.module.scss'
import LoginIcon from '@/assets/icons/login.svg'
import { FormEvent, useState } from 'react'
import { FormType } from '@/models/form-item'

type LoginProps = {

} 
export default function Login(props: LoginProps) {

    const [form, setForm] = useState<FormType>({
        email: {
            name: 'email',
            value: '',
            error: false,
            rules: [],
        },
        password: {
            name: 'password',
            value: '',
            error: false,
            rules: [],
        }    
    })

    const [isFirstTry, setIsFirstTry] = useState<boolean>(false)

    const handleOnChange = (e: FormEvent<HTMLInputElement>, name: string) => {
        const target = e.target as HTMLInputElement
        const newVal = target.value
        
        const newState = {...form}
        newState[name].value = newVal // Try to understand why its giving me error
        setForm(newState)
    }
    
    return (
        <div className={styles['login-container']}>
            <div className={styles['login-img-container']}>
                <img src={LoginIcon.src} alt={'login'}/>
            </div>

            <form className={styles['form']}>
                <h1 className={styles['title']}>Login</h1>
                <CustomInput
                    className={styles['custom-input']}
                    name={form.email?.name || ''}
                    value={form.email?.value || ''}
                    placeholder={'Email'}
                    autoFocus={true}
                    onChange={handleOnChange}
                />

                <CustomInput
                    className={styles['custom-input']}
                    name={form.password?.name || ''}
                    value={form.password?.value || ''}
                    placeholder={'Password'}
                    autoFocus={true}
                    onChange={handleOnChange}
                />
            </form>
        </div>
    )
}