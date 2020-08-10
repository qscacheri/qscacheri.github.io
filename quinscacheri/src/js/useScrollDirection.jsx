import React, { useState } from 'react'
import { useEffect } from 'react'

const useScrollDirection = (callback) => {
    const [previousPos, setPreviousPos] = useState(0)
    const [scrollPos, setScrollPos] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > previousPos) {
                callback("down")
            }
            else {
                callback("up")
            }
            setPreviousPos(scrollPos)
            setScrollPos(window.pageYOffset)
        });
        return () => { window.removeEventListener('scroll', () => null); }
    }, [])
    return scrollPos
}

export default useScrollDirection