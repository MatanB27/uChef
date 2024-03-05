import Link from "next/link";
import { LOGIN_ROUTE } from "./_lib/constants"; 

export default function Home() {
    return (
        <main>
            This is the Homepage
            <Link href={LOGIN_ROUTE}>Login here!</Link>
        </main>
    )
}