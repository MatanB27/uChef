"use client";

import { MouseEventHandler, useEffect } from 'react'
import styles from './sidebar..module.scss'
import clsx from 'clsx'
import CloseIcon from '@/assets/icons/close.svg'
import Seperator from '../seperator/seperator'
import Link from 'next/link';
import { LOGIN_ROUTE } from '@/app/_lib/constants';
import { usePathname } from 'next/navigation';
import { RouteItem } from "@/models/route-item"

type SideBarProps = {
    isOpen: boolean,
    closeSideBar: MouseEventHandler<HTMLButtonElement>,
    routes: RouteItem[],
}

type NavigatorProps = {
    routes: RouteItem[]
}

export default function SideBar(props: SideBarProps) {
    const {
        isOpen = false,
        closeSideBar = () => {},
        routes = [],
    } = props

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

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
                <Navigator routes={routes}/>
                
            </aside>
            <button className={clsx(styles['bg-layout'], isOpen ? styles['is-open'] : '')} onClick={closeSideBar}/>
        </>
    )
}

function Navigator(props: NavigatorProps) {
    const {
        routes,
    } = props

    const pathname = usePathname()
    const isPathActive = (currentPath: string) => pathname === currentPath

    return (
        <nav className={styles['navbar']}>
            {
                routes.length >= 1 && routes.map((route: RouteItem) => {
                    return (
                        <Link key={route.key} className={clsx(styles['route'], isPathActive(route.route) ? styles['active'] : '')} href={LOGIN_ROUTE}>{route.key}</Link>
                    )
                })
            }
        </nav>
    )
} 