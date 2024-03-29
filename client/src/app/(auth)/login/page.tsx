"use client"

import { CustomInput } from '@/components/custom-input/custom-input'
import styles from './page.module.scss'
import LoginIcon from '@/assets/illustrations/login.svg'
import { FormEvent, useState } from 'react'
import { FormType } from '@/models/form-item'
import CustomButton from '@/components/custom-button/custom-button'
import Link from 'next/link'
import { REGISTER_ROUTE } from '@/utils/constants/routes-constants'
import Validate from '@/utils/validation'

type LoginProps = {

} 
export default function Login(props: LoginProps) {

    const [form, setForm] = useState<FormType>({
        email: {
            name: 'email',
            value: '',
            error: '',
            valid: false,
            rules: ['email', 'not_empty'],
        },
        password: {
            name: 'password',
            value: '',
            error: '',
            valid: false,
            rules: ['not_empty', 'password'],
        }    
    })

    const handleOnChange = (e: FormEvent<HTMLInputElement>, name: string) => {
        const target = e.target as HTMLInputElement
        const newVal = target.value
        
        const newState: FormType = { ...form };
        (newState[name]).value = newVal;
        
        setForm(newState)
    }

    const onSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const newState = {...form}
        let isValid = true;
        for (const key in form) {
            let validationObj = Validate(newState[key].rules, newState[key].value)
            newState[key].valid = validationObj.isValid
            newState[key].error = validationObj.msg

            if(!newState[key].valid) {
                isValid = false
            }
        }

        setForm(newState)

        if(isValid) {
            console.log('validd....!!! API CALL HERE');
            
        }
        
    }
    
    return (
        <div className={styles['login-container']}>
            <img src={LoginIcon.src} alt={'login'}/>
            <form className={styles['form']}>
                <h1 className={styles['title']}>Login</h1>
                <div className={styles['inputs-container']}>
                    <CustomInput
                        className={styles['custom-input']}
                        name={form.email?.name || ''}
                        value={form.email?.value || ''}
                        error={form.email?.error || ''}
                        placeholder={'Email'}
                        type={'email'}
                        autoFocus={true}
                        onChange={handleOnChange}
                    />
                    <CustomInput
                        className={styles['custom-input']}
                        name={form.password?.name || ''}
                        value={form.password?.value || ''}
                        error={form.password?.error || ''}
                        placeholder={'Password'}
                        type={'password'}
                        autoFocus={true}
                        onChange={handleOnChange}
                    />
                </div>
                <CustomButton
                    className={styles['custom-btn']}
                    text={'SUBMIT'}
                    type={'submit'}
                    onClick={onSubmit}
                />

                <p className={styles['subtext']}>Doesn't have account? <Link style={{textDecoration: 'underline'}} href={REGISTER_ROUTE}>Click Here</Link> to register</p>
            </form>
        </div>
    )
}