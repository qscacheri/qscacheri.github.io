import React from 'react'
import styled from 'styled-components'

const SideTextContainer = styled.div`
    display: flex;
    justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};
    background: white;
    height: 50vh;
    width: 100%;
    background: none;
    p {
        margin: auto 0;
        height: 50%;
        width: 25%;
        background: none;
        font-size: 36px;
    }
`

export const SideText = ({ children, left = true, right }) => {
    return <SideTextContainer left={left} right={right}>
        <p>
            {children}
        </p>
    </SideTextContainer>
}

const SectionHeaderContainer = styled.div`
    display: flex;
    justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};
    h1 {
        font-weight: 200;
        font-size: 72px;
        margin: 24px;
    }
`
export const SectionHeader = ({ children, left, right }, ref) => {
    return <SectionHeaderContainer left={left} right={right}>
        <h1>
            {children}
        </h1>
    </SectionHeaderContainer>
}

