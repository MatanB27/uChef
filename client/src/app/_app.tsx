"use client"

import store from "@/redux";
import { Provider } from "react-redux";

type MyAppProps = {
    children: React.ReactNode
}

export default function MyApp(props: MyAppProps) {

    const {
        children
    } = props
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}