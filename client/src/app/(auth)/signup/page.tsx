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
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { User } from '@/models/user'
import { createUser } from '@/api/api'
import Loader, { isLoading } from '@/components/loader/loader'

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

    const queryClient = useQueryClient()
    const {status, error, mutate} = useMutation({
        mutationFn: createUser, 
        onSuccess: newUser => {
            queryClient.setQueryData(['users', newUser.id], newUser)
        },
        onError: (e) => {
            const errorMessage = e.message;
        }, 
    })
    
    const handleOnChange = (e: FormEvent<HTMLInputElement>, name: string) => {
        const target = e.target as HTMLInputElement
        const newVal = target.value
        
        const newState: FormType = { ...form };
        newState[name].value = newVal;

        let validationObj = Validate(newState[name].rules, newVal)
        newState[name].valid = validationObj.isValid
        newState[name].error = validationObj.msg
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
            const user: User = {
                firstName: form.firstName.value,
                lastName: form.lastName.value,
                email: form.email.value,
                password: form.password.value,
            }
            mutate(user)
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
            </div>
            {
                isLoading(status) && <Loader/>
            }
            <CustomButton
                className={styles['custom-btn']}
                type={'submit'}
                onClick={onSubmit}
            >
                {'SIGN UP'}
            </CustomButton>
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