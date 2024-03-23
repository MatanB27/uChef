"use client"

import { CustomInput } from '@/components/custom-input/custom-input'
import styles from './page.module.scss'
import LoginIcon from '@/assets/icons/login.svg'
import { FormEvent, useState } from 'react'
import { FormType, FormField } from '@/models/form-item'
import CustomButton from '@/components/custom-button/custom-button'

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
        
        const newState: FormType = { ...form };
        (newState[name as keyof FormType] as FormField).value = newVal;
        
        setForm(newState)
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        console.log('submitted...');
        
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
                    type={'password'}
                    autoFocus={true}
                    onChange={handleOnChange}
                />

                <CustomButton
                    className={'custom-btn'}
                    text={'Submit'}
                    type={'submit'}
                    onClick={onSubmit}
                />
            </form>
        </div>
    )
}