"use client";

import { MouseEventHandler, useEffect } from 'react'
import styles from './sidebar..module.scss'
import clsx from 'clsx'
import CloseIcon from '@/assets/icons/close.svg'
import Seperator from '../seperator/seperator'
import Link from 'next/link';
import { LOGIN_ROUTE } from '@/app/_lib/constants';
import { usePathname } from 'next/navigation';

type SideBarProps = {
    isOpen: boolean,
    closeSideBar: MouseEventHandler<HTMLButtonElement>,
}

export default function SideBar(props: SideBarProps) {
    const {
        isOpen = false,
        closeSideBar = () => {}
    } = props


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
                <Navigator/>
                
            </aside>
            <button className={clsx(styles['bg-layout'], isOpen ? styles['is-open'] : '')} onClick={closeSideBar}/>
        </>
    )
}

function Navigator() {
    const pathname = usePathname()
    const isPathActive = (currentPath: string) => pathname === currentPath
    return (
        <nav className={styles['content']}>
            <Link className={clsx(styles['route'], isPathActive(LOGIN_ROUTE) ? styles['active'] : '')} href={LOGIN_ROUTE}>Login</Link>
        </nav>
    )
} 