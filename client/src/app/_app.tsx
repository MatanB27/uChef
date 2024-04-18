"use client"

import store from "@/redux";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, useEffect, Suspense } from "react";

type MyAppProps = {
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
    const queryClient = new QueryClient()

    useEffect(() => {
        // @ts-expect-error
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])
    
    
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} buttonPosition={'bottom-left'}/>
                    {showDevtools && (
                        <Suspense fallback={null}>
                        <ReactQueryDevtoolsProduction />
                        </Suspense>
                    )}
            </QueryClientProvider>
        </Provider>
    )
}