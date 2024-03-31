"use client";

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, ROOT_ROUTE } from "@/utils/constants/routes-constants"
import { usePathname } from "next/navigation"
import styles from './footer.module.scss';
import ChefHatIcon from '@/assets/icons/chef-hat.svg'
import Link from "next/link";
import { RouteItem } from "@/models/route-item";
import clsx from "clsx";

type FooterProps = {
    footerRoutes: RouteItem[]
}
const routesWithoutFooter: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, SIGNUP_ROUTE]

// TODO: finish
export default function Footer(props: FooterProps) {

    const { 
        footerRoutes
    } = props;

    const pathname = usePathname()
    const shouldFooterExists = pathname && !routesWithoutFooter.includes(pathname)
    
    if(!shouldFooterExists) {
        return <></>
    }


    return ( 
        <footer className={styles['footer']}>
            <p className={styles['additional']}>
                more to write here...
            </p>
            
            <RenderFooterLogo/>
            <RenderNavFooter footerRoutes={footerRoutes}/>
        </footer>
    )
}

function RenderFooterLogo() {
    return (
        <Link className={styles['logo-container']} href={ROOT_ROUTE}>
            <img className={styles['icon']} src={ChefHatIcon.src} alt="chef-logo"/>
            <span className={styles['logo-text']}>uChef</span>
            <p className={styles['desc']}>
                Explore, Share, and enjoy delicious recipes with uChef
            </p>
        </Link>
    )
}

function RenderNavFooter(props: FooterProps) {
    const {
        footerRoutes
    } = props
    return (
        <nav className={styles['nav']}>
            <h3 className={styles['title']}>Pages</h3>
            <div className={styles['routes-container']}>
                {
                    footerRoutes.length >= 1 && footerRoutes.map((route: RouteItem) => {
                        return (
                            <Link key={route.key} className={clsx(styles['route'])} href={route.route}>{route.key}</Link>
                        )
                    })
                }   
            </div>
        </nav>
    )
}