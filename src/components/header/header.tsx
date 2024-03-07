"use client"

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/_lib/constants"
import { usePathname } from "next/navigation"
import styles from './header.module.scss'
import ChefHatIcon from '@/assets/icons/chef-hat.svg'
import { ROOT_ROUTE } from "@/app/_lib/constants"
import menuIcon from '@/assets/icons/menu.svg'
import Link from "next/link"
import { useEffect, useState } from "react"
import SideBar from "../sidebar/sidebar"
import { useWindowSize } from "@/hooks/window-size"
import Seperator from "../seperator/seperator"
import { RouteItem } from "@/types/route-item"
import clsx from "clsx"
import { useScrollPosition } from "@/hooks/scroll-position"

type HeaderProps = {
    props?: {}
}

type NavDesktopProps = {
    isActive: boolean,
    routes: RouteItem[]
}

const headerRoutes = [
    {
        key: 'Login',
        route: LOGIN_ROUTE,
    },
    {
        key: 'Register',
        route: REGISTER_ROUTE,
    }
]
const MINIMIZE_POSITION: number = 100
const routesWithoutHeader: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Header(props: HeaderProps) {
    
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
    
    const headerLogo = () => {
        return (
            <Link className={styles['logo-container']} href={ROOT_ROUTE}>
                <img className={styles['icon']} src={ChefHatIcon.src} alt="chef-logo"/>
                <span className={styles['logo-text']}>uChef</span>
            </Link>
        )
    }
    if(!shouldHeaderExists) {
        return <></>
    }

    return (
        <>
            <header className={clsx(styles['header'], miniizedHeader ? styles['minimized'] : '')}>
                <button className={styles['menu']} onClick={openSideBar}>
                    <img className={styles['menu-icon']} src={menuIcon.src} alt="menu"/>
                </button>
                {headerLogo()}
                <Seperator isActive={isDesktop && !miniizedHeader} width={50}/>
                <NavDesktop isActive={isDesktop} routes={headerRoutes}/>
            </header>
            <SideBar isOpen={sideBarOpen} closeSideBar={closeSideBar} routes={headerRoutes}/>
        </>
    )
}

function NavDesktop(props: NavDesktopProps) {
    
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