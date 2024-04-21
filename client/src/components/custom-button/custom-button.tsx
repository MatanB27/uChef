import clsx from 'clsx'
import styles from './custom-button.module.scss'
import { BUTTON_BUTTON, BUTTON_RESET, BUTTON_SUBMIT } from '@/utils/constants/button-types'

type CustomButtonProps = {
    className: string,
    children: React.ReactNode,
    type: typeof BUTTON_SUBMIT | typeof BUTTON_RESET | typeof BUTTON_BUTTON,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

// TODO: make it animated
export default function CustomButton(props: CustomButtonProps) {

    const {
        children = '',
        className = '',
        type = 'button',
        onClick = () => {}
    } = props
    return (
        <button 
            onClick={onClick}
            className={clsx(styles['btn-container'] ,className)}
            type={type}
        >
            {children}
        </button>
    )
} 