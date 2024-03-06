"use client";

import { FORGET_PASSWORD_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from "@/app/_lib/constants"
import { usePathname } from "next/navigation"

type FooterProps = {
    props?: {}
}
const routesWithoutFooter: string[] = [FORGET_PASSWORD_ROUTE,  LOGIN_ROUTE, REGISTER_ROUTE]

export default function Footer(props: FooterProps) {
    const pathname = usePathname()
    const shouldFooterExists = pathname && !routesWithoutFooter.includes(pathname)
    
    if(!shouldFooterExists) {
        return <></>
    }

    return ( 
        <footer style={{background: 'lightblue', padding: "1rem"}}>
            This is a Footer!
        </footer>
    )
}