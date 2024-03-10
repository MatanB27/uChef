import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1200;

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const isMobile = width < MOBILE_BREAKPOINT;
            const isTablet = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;
            const isDesktop = width >= TABLET_BREAKPOINT;

            setWindowSize({ isMobile, isTablet, isDesktop });
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};
