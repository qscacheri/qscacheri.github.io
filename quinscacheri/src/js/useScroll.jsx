import React, { useState } from 'react'
import { useEffect } from 'react'

const useScroll = () => {
    const [scrollPos, setScrollPos] = useState(0)
    useEffect(() => {
        console.log("adding listener");
        window.addEventListener('scroll', () => {
            setScrollPos(window.pageYOffset)
        });
        return () => { window.removeEventListener('scroll', () => null); }
    }, [])
    return scrollPos
}

export default useScroll