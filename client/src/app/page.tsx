"use client"

import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../utils/constants/routes-constants"; 
import { Provider, useDispatch, useSelector } from "react-redux";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import store from "@/redux";
import Actions from "@/redux/actions";
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
        <Provider store={store}>
            <Page/>
        </Provider>
    )
}

function Page() {
    
    const dispatch = useDispatch()
    const popup = useSelector((store: any) => store.popup)
    
    const openPopup = () => {
        dispatch(Actions.setPopup(!popup))
    }

    //TODO: remove the style when finish
    return (
        <>  
            <Popup type={'basic'} data={{da: 'asd'}}/>
            <Header headerRoutes={navRoutes}/>
                    <main style={{height: '400px', marginTop: '150px'}}>
                        
                        <button onClick={openPopup}>Click here to open popup</button>
                    </main>
            <Footer footerRoutes={navRoutes}/>
        </>
    )
}