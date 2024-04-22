"use client"

import store from "@/redux";
import { Provider, useSelector } from "react-redux";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, useEffect, Suspense } from "react";
import { Popup } from "@/popups";

type MyAppProps = {
    children: React.ReactNode
}
type AppBodyProps = {
    showDevtools: boolean,
    children: React.ReactNode
}
/**
 * The React Query Devtool is enabled only in development mode.
 * This code ensures it can also be enabled in production, but only after calling 'window.toggleDevtools()'.
 */
const ReactQueryDevtoolsProduction = lazy(() =>
    import('@tanstack/react-query-devtools/build/modern/production.js').then(
        (d) => ({
        default: d.ReactQueryDevtools,
        }),
    ),
)

export default function MyApp(props: MyAppProps) {

    const {
        children
    } = props

    const [showDevtools, setShowDevtools] = useState<boolean>(false)
    

    useEffect(() => {
        // @ts-expect-error
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])
    
    const queryClient = new QueryClient()
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <AppBody showDevtools={showDevtools} children={children}/>
            </QueryClientProvider>
        </Provider>
    )
}

function AppBody(props: AppBodyProps) {

    const {
        showDevtools,
        children
    } = props
    
    
    const popup = useSelector((store: any) => store.popup)

    const renderPopups = () => {
        return (
            popup.map((data: any, index: number) => {
                return (
                    <Popup key={index} data={data}/>
                )
            })
        )
    }
    return (
        <>
            {renderPopups()}
            {children}
            
                <ReactQueryDevtools initialIsOpen={false} buttonPosition={'bottom-left'}/>
                    {showDevtools && (
                        <Suspense fallback={null}>
                        <ReactQueryDevtoolsProduction />
                        </Suspense>
                    )}
   
        </>
    )
}