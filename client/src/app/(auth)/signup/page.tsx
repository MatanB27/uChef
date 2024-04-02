"use client"

import { CustomInput } from '@/components/custom-input/custom-input'
import styles from './page.module.scss'
import SignupIcon from "@/assets/illustrations/signup.svg"
import { FormEvent, ReactNode, useState } from 'react'
import { FormType } from '@/models/form-item'
import CustomButton from '@/components/custom-button/custom-button'
import Link from 'next/link'
import { LOGIN_ROUTE } from '@/utils/constants/routes-constants'
import Validate from '@/utils/validation'
import { ApiManager } from '@/ApiManager/ApiManager'
import { User } from '@/models/user'

type RowDesktopProps = {
    children: ReactNode
}

type SignupProps = {

}

export default function Signup(props: SignupProps) {

    const [form, setForm] = useState<FormType>({
        firstName: {
            name: 'firstName',
            value: '',
            error: '',
            valid: false,
            rules: ['not_empty'],
        },
        lastName: {
            name: 'lastName',
            value: '',
            error: '',
            valid: false,
            rules: ['not_empty'],
        },
        phone: {
            name: 'phone',
            value: '',
            error: '',
            valid: false,
            rules: ['not_empty', 'phone'],
        },
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
            const user = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                email: form.email.value,
                password: form.password.value,
                phone: form.phone.value,
            }
            ApiManager.CreateUser(user).then(newUser => {
                console.log('newUser: ', newUser);
            }).catch(e => {
                console.log('error: ', e);        
            })
        }
        
    }
    
    
    return (
        <div className={styles['signup-container']}>
            <img src={SignupIcon.src} alt={'signup'}/>
            <form className={styles['form']}>
                <h1 className={styles['title']}>Signup</h1>
                <div className={styles['inputs-container']}>
                
                <RowDesktop>
                    <CustomInput
                        className={styles['custom-input']}
                        name={form.firstName?.name || ''}
                        value={form.firstName?.value || ''}
                        error={form.firstName?.error || ''}
                        placeholder={'First Name'}
                        type={'text'}
                        autoFocus={true}
                        onChange={handleOnChange}
                    />
                    <CustomInput
                        className={styles['custom-input']}
                        name={form.lastName?.name || ''}
                        value={form.lastName?.value || ''}
                        error={form.lastName?.error || ''}
                        placeholder={'Last Name'}
                        type={'text'}
                        autoFocus={true}
                        onChange={handleOnChange}
                    />
                </RowDesktop>
                <RowDesktop>
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
                </RowDesktop>
                <CustomInput
                    className={styles['custom-input']}
                    name={form.phone?.name || ''}
                    value={form.phone?.value || ''}
                    error={form.phone?.error || ''}
                    placeholder={'Phone Number'}
                    type={'text'}
                    autoFocus={true}
                    onChange={handleOnChange}
                />
                </div>
                <CustomButton
                    className={styles['custom-btn']}
                    text={'SIGN UP'}
                    type={'submit'}
                    onClick={onSubmit}
                />

                <p className={styles['subtext']}>Already have an account? <Link style={{textDecoration: 'underline'}} href={LOGIN_ROUTE}>Click Here</Link> to login</p>
            </form>
        </div>
    )
}

function RowDesktop(props: RowDesktopProps) {

    const { children } = props
    return ( 
        <div className={styles['row-desktop']}>
            {children}
        </div>
    )
}