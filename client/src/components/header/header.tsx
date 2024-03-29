"use client"

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/utils/constants/routes-constants"
import { usePathname } from "next/navigation"
import styles from './header.module.scss'
import ChefHatIcon from '@/assets/icons/chef-hat.svg'
import { ROOT_ROUTE } from "@/utils/constants/routes-constants"
import menuIcon from '@/assets/icons/menu.svg'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "../sidebar/sidebar"
import { useWindowSize } from "@/hooks/window-size"
import { RouteItem } from "@/models/route-item"
import clsx from "clsx"
import { useScrollPosition } from "@/hooks/scroll-position"

// TODO: finish
// ALSO make the header to be shown when scrolling up
type HeaderProps = {
    headerRoutes: RouteItem[]
}

type NavDesktopProps = {
    isActive: boolean,
    routes: RouteItem[]
}

const MINIMIZE_POSITION: number = 30;

const routesWithoutHeader: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Header(props: HeaderProps) {
    const {
        headerRoutes
    } = props

    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false)
    const [miniizedHeader, setMinimizedHeader] = useState<boolean>(false)

    const pathname = usePathname()
    const { isDesktop } = useWindowSize()
    const scrollPosition = useScrollPosition()
    
    const shouldHeaderExists =  pathname && !routesWithoutHeader.includes(pathname)
    
    useEffect(() => {
        if(scrollPosition >= MINIMIZE_POSITION) {
            setMinimizedHeader(true)
        }else {
            setMinimizedHeader(false)
        }
    }, [scrollPosition])
    

    const openSideBar = () => setSideBarOpen(true)
    const closeSideBar = () => setSideBarOpen(false)
    
    if(!shouldHeaderExists) {
        return <></>
    }

    return (
        <>
            <header className={clsx(styles['header'], miniizedHeader ? styles['minimized'] : '')}>
                <button className={styles['menu']} onClick={openSideBar}>
                    <img className={styles['menu-icon']} src={menuIcon.src} alt="menu"/>
                </button>
                {RenderHeaderLogo()}
                <RenderNavDesktop isActive={isDesktop} routes={headerRoutes}/>
            </header>
            <SideBar isOpen={sideBarOpen} closeSideBar={closeSideBar} routes={headerRoutes}/>
        </>
    )
}

function RenderHeaderLogo() {
    return (
        <Link className={styles['logo-container']} href={ROOT_ROUTE}>
            <img className={styles['icon']} src={ChefHatIcon.src} alt="chef-logo"/>
            <span className={styles['logo-text']}>uChef</span>
        </Link>
    )
}

function RenderNavDesktop(props: NavDesktopProps) {
    
    const {
        isActive,
        routes
    } = props

    const pathname = usePathname()
    const isPathActive = (currentPath: string) => pathname === currentPath
    
    if(!isActive) {
        return <></>
    }
    
    return (
        <nav className={styles['navbar']}>
            {
                routes.length >= 1 && routes.map((route: RouteItem) => {
                    return (
                        <Link key={route.key} className={clsx(styles['route'], isPathActive(route.route) ? styles['active'] : '')} href={route.route}>{route.key}</Link>
                    )
                })
            }        
        </nav>
    )
}