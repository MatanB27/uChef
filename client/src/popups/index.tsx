import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Actions from '@/redux/actions'
import CloseIcon from '@/assets/icons/close.svg'
import clsx from 'clsx'
interface PopupProps<T> {
    data: T, //TODO: add specific data (like text, subText, button text... etc...)
    type: string,
}

export function Popup<T>(props: PopupProps<T>) {
    
    const {
        type = 'basic',
        data,
    } = props

    const popup = useSelector((store: any) => store.popup)
    const dispatch = useDispatch()
    
    const onClose = () => {
        dispatch(Actions.setPopup(false))
    }

    const popupStyle = {
        transform: popup ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease-in-out'
    };

    return (
        <>
            <button className={clsx(styles['backdrop'], popup ? styles['active'] : styles['not-active'])} onClick={onClose}/>
            <div style={popupStyle} className={styles['popup']}>
                <button className={styles['close-btn']} onClick={onClose}>
                    <img src={CloseIcon.src}/>
                </button>
                Add type here
            </div>
        </>
    )
}