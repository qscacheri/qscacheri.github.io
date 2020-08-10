import React from 'react'
import styled from 'styled-components'

const SideTextContainer = styled.div`
    display: flex;
    justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};
    background: white;
    font-size: 24px;
    height: 50vh;
    width: 100%;
    background: none;
    p {
        margin: auto 0;
        height: 50%;
        width: 25%;
        background: none;
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
    height: 100vh;
    h1 {
        font-weight: 200;
        font-size: 56px;
        margin: 24px;
    }
`
export const SectionHeader = ({ children, left, right }) => {
    return <SectionHeaderContainer left={left} right={right}>
        <h1>
            {children}
        </h1>
    </SectionHeaderContainer>
}

