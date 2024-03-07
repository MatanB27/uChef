"use client";

import { MouseEventHandler, useEffect } from 'react'
import styles from './sidebar..module.scss'
import clsx from 'clsx'
import CloseIcon from '@/assets/icons/close.svg'
import Seperator from '../seperator/seperator'

type SideBarProps = {
    isOpen: boolean,
    closeSideBar: MouseEventHandler<HTMLButtonElement>,
}

export default function SideBar(props: SideBarProps) {
    const {
        isOpen = false,
        closeSideBar = () => {}
    } = props

    useEffect(() => {

    }, [])
    return (
        <>
            <aside className={clsx(styles['sidebar'], isOpen ? styles['is-open'] : '')}>
                <div className={styles['sidebar-header']}>
                    <h1 className={styles['menu-title']}>Menu</h1>
                    <button className={styles['close-icon']} onClick={closeSideBar}>
                        <img className={styles['img']} src={CloseIcon.src} alt={'close'}/>
                    </button>
                </div>

                <Seperator/>
                <nav className={styles['content']}>
                    Navigation here
                    {/* TODO: Add Navigator! */}
                </nav>
            </aside>
            <button className={clsx(styles['bg-layout'], isOpen ? styles['is-open'] : '')} onClick={closeSideBar}/>
        </>
    )
}
