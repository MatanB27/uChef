"use client"

import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/constants/routes-constants"; 
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { Popup } from "@/popups";

const navRoutes = [
    {
        key: 'Login',
        route: LOGIN_ROUTE,
    },
    {
        key: 'Signup',
        route: SIGNUP_ROUTE,
    }
]

export default function Home() {
    
    return (
      <>  
        <Popup type={'basic'}/>
        <Header headerRoutes={navRoutes}/>
            {/* //TODO: remove the style when finish */}
            <main style={{height: '400px', marginTop: '150px'}}>

                
            </main>
        <Footer footerRoutes={navRoutes}/>
      </>

    )
}