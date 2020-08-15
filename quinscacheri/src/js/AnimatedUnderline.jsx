import React from 'react'
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
const DONE = "DONE"
const IN_PROGRESS = "IN_PROGRESS"

const Container = styled.div`

`

const Line = styled.svg`
    width: 100%;
    height: 2px;
`
const AnimatedUnderline = () => {
    const ref = useRef()
    const [width, setWidth] = useState(0)
    const [animationState, setAnimationState] = useState(DONE)
    const [underLineWidth, setUnderlineWidth] = useState(0)
    const handleMouseOver = () => {
        setUnderlineWidth()
        setAnimationState(IN_PROGRESS)
    }

    useEffect(() => {

    }, [underLineWidth, animationState])
    return <Container onMouseOver={handleMouseOver} ref={ref}>
        <Line viewBox={[0, 0,]}>
            <rect></rect>
        </Line>
    </Container>
}

export default AnimatedUnderline