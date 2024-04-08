"use client"

import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/constants/routes-constants"; 
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

import { Popup } from "@/popups";
import { useDispatch, useSelector } from "react-redux";
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
    
    const dispatch = useDispatch()
    const popup = useSelector((store: any) => store.popup)
    const openPopup = () => {
        dispatch(Actions.addPopup({sdfsa: 'sdf'}))
    }

    console.log('popup: ', popup);
    
    return (
      <>  
        {
            popup.map((data: any, index: number) => {
                return (
                    <Popup key={index} data={data}/>
                )
            })
        }
        <Header headerRoutes={navRoutes}/>
            {/* //TODO: remove the style when finish */}
            <main style={{height: '400px', marginTop: '150px'}}>

                <button onClick={openPopup}>Click me!</button>
            </main>
        <Footer footerRoutes={navRoutes}/>
      </>

    )
}