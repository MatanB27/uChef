"use client"

import clsx from 'clsx';
import styles from './custom-input.module.scss';
import { ChangeEvent, FormEvent } from 'react';
import { OFF, ON } from '@/utils/autocomplete-types';

type CustomInputProps = {
    className?: string;
    autoFocus?: boolean,
    type?: string,
    autoComplete?: typeof ON | typeof OFF, 
    value: string;
    placeholder: string;
    name: string,
    error:string,
    onChange: (event: ChangeEvent<HTMLInputElement>, name: string) => void,
};

export function CustomInput(props: CustomInputProps) {

    const {
        className = '',
        value = '',
        placeholder = '',
        autoFocus = false,
        name = '',
        onChange = () => {},
        type = 'text',
        error = '',
        autoComplete = OFF
    } = props;

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        const event = e as React.ChangeEvent<HTMLInputElement>;
        typeof onChange === 'function' && onChange(event, name)
    };

    return (
        <div className={clsx(styles.input, className)}>
            <label>{placeholder}</label>
            <input
                autoFocus={autoFocus} 
                value={value}
                onChange={handleChange}
                name={name}
                type={type}
                autoComplete={autoComplete}
            />
            {
                error.length > 0 && (
                    <span className={styles['error']}>{error}</span>
                )
            }
        </div>
    );
}
