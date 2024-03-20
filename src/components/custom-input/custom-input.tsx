"use client"

import clsx from 'clsx';
import styles from './custom-input.module.scss';
import { ChangeEvent } from 'react';

type CustomInputProps = {
    className?: string;
    autoFocus?: boolean,
    value: string;
    placeholder: string;
    onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export function CustomInput(props: CustomInputProps) {

    const {
        className = '',
        value = '',
        placeholder = '',
        autoFocus = false,
        onChange = () => {},
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <div className={clsx(styles.input, className)}>
            <label>{placeholder}</label>
            <input
                autoFocus={autoFocus} 
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}
