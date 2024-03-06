"use client"

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/_lib/constants"
import { usePathname } from "next/navigation"

type HeaderProps = {
    props?: {}
}

const routesWithoutHeader: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Header(props: HeaderProps) {
    const pathname = usePathname()
    const shouldHeaderExists = pathname && !routesWithoutHeader.includes(pathname)
    
    if(!shouldHeaderExists) {
        return <></>
    }
    
    return (
    <header style={{background: 'lightblue', padding: "1rem"}}>
        This is a Header!
        </header>
    )
}