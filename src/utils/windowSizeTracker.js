import { useEffect, useState } from 'react'

export function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    });
    useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
        setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    }
    
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // cleanup
    return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}