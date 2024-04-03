"use client"

import Link from "next/link";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/constants/routes-constants"; 
import { Provider, useDispatch, useSelector } from "react-redux";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import store from "@/redux";
import Actions from "@/redux/actions";

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
        <Provider store={store}>
            <Page/>
        </Provider>
    )
}

function Page() {
    
    const dispatch = useDispatch()
    const popup = useSelector((store: any) => store.popup)
    console.log('wow: ', popup);
    
    const openPopup = () => {
        dispatch(Actions.setPopupActive(!popup))
    }

    //TODO: remove the style when finish
    return (
        <>
            <Header headerRoutes={navRoutes}/>
                    <main style={{height: '400px', marginTop: '150px'}}>
                        
                        <button onClick={openPopup}>Click here to open popup</button>
                    </main>
            <Footer footerRoutes={navRoutes}/>
        </>
    )
}