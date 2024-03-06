"use client"

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/_lib/constants"
import { usePathname } from "next/navigation"
import styles from './header.module.scss'
import ChefHatIcon from '@/assets/icons/chef-hat.svg'
import { ROOT_ROUTE } from "@/app/_lib/constants"
import menuIcon from '@/assets/icons/menu.svg'
import Link from "next/link"

type HeaderProps = {
    props?: {}
}

const routesWithoutHeader: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Header(props: HeaderProps) {
    const pathname = usePathname()
    const shouldHeaderExists = pathname && !routesWithoutHeader.includes(pathname)
    
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
    <header className={styles['header']}>
        {headerLogo()}

        <button className={styles['menu']}>
            <img className={styles['menu-icon']} src={menuIcon.src} alt="menu"/>
        </button>
    </header>
    )
}