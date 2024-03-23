import Link from "next/link";
import { LOGIN_ROUTE } from "./_lib/constants/routes-constants"; 

export default function Home() {
    //TODO: remove the style when finish
    return (
        <main style={{overflow: 'hidden'}}>
            This is the Homepage
            <Link href={LOGIN_ROUTE}>Login here!</Link>
        </main>
    )
}