"use client"

import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Actions from '@/redux/actions'
import CloseIcon from '@/assets/icons/close.svg'
import clsx from 'clsx'
import { PopupBasic } from './basic/popup-basic'
interface PopupProps {
    type: string,
}

interface PopupDetailsProps {
    type: string,
    data: any
}


export function Popup<T>(props: PopupProps) {
    
    const {
        type = 'basic',
    } = props

    const popupData = useSelector((store: any) => store.popup)
    const dispatch = useDispatch()
    
    const onClose = () => {
        dispatch(Actions.setPopup(false))
    }

    const popupStyle = {
        transform: popupData ? 'translateY(0)' : 'translateY(100%)',
        transition: '0.25s ease-in-out',
        opacity: popupData ? '1' : '0',
    };

    return (
        <>
            <button className={clsx(styles['backdrop'], popupData ? styles['active'] : styles['not-active'])} onClick={onClose}/>
            <div style={popupStyle} className={styles['popup']}>
                <button className={styles['close-btn']} onClick={onClose}>
                    <img src={CloseIcon.src}/>
                </button>
                {
                    popupData && (
                        <PopupDetails type={type} data={popupData}/>
                    )
                }
            </div>
        </>
    )
}

function PopupDetails(props: PopupDetailsProps) {

    const {type, data} = props
    
    switch(type) {
        case 'basic': 
            return <PopupBasic data={data}/>

        default: 
            return <></>
    }

    return <></>
}