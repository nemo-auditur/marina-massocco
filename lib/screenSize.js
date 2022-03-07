import { useState, useEffect } from 'react'

export default function screenSize () {
    const [windowSize, setWindowSize] = useState({
        width: 100,
        height: 100,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {

        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => {
            window.removeEventListener("resize", handleResize)};
        }
    }, []);
    return windowSize;
}
