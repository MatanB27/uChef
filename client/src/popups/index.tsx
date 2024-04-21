"use client"

import { useDispatch, useSelector } from 'react-redux'
import styles from './index.module.scss'
import Actions from '@/redux/actions'
import CloseIcon from '@/assets/icons/close.svg'
import clsx from 'clsx'
import { PopupBasic } from './basic/popup-basic'
import { useEffect, useState } from 'react'
interface PopupProps {
    type?: string,
    data: object[]
}

export function Popup<T>(props: PopupProps) {
    
    const {
        type = 'basic',
        data,
    } = props

    const [backDropAnimation, setBackDropAnimation] = useState<boolean>(false)
    const [popupAnimation, setPopupAnimation] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setTimeout(() => {
            setBackDropAnimation(true)
            setPopupAnimation(true)
        }, .1)
    }, [])

    const onClose = () => {
        setBackDropAnimation(false)
        setPopupAnimation(false)
        setTimeout(() => {
            dispatch(Actions.removePopup())
        }, 250)
    }
    
    return (
        <>
            <button className={clsx(styles['backdrop'], backDropAnimation ? styles['active'] : styles['not-active'])} onClick={onClose}/>
            <div className={clsx(styles['popup'], popupAnimation ? styles['active'] : styles['not-active'])}>
                <button className={styles['close-btn']} onClick={onClose}>
                    <img src={CloseIcon.src}/>
                </button>
                {
                    data && (
                        <PopupDetails type={type} data={data}/>
                    )
                }
            </div>
        </>
    )
}

function PopupDetails(props: PopupProps) {

    const {type, data} = props
    
    switch(type) {
        case 'basic': 
            return <PopupBasic data={data}/>

        default: 
            return <></>
    }
}