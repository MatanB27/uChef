"use client"

import clsx from 'clsx';
import styles from './custom-input.module.scss';
import { ChangeEvent, FormEvent } from 'react';

type CustomInputProps = {
    className?: string;
    autoFocus?: boolean,
    value: string;
    placeholder: string;
    name: string,
    type?: string,
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
        type = 'text'
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
            />
        </div>
    );
}
