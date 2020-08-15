import React from 'react'
import styled from 'styled-components'

const SideTextContainer = styled.div`
    display: flex;
    justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
    background: white;
    height: 100%;
    width: 100vw;
    background: none;
`

const ColumnContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const SideColumn = ({ children, left, right }) => {
    return <SideTextContainer left={left} right={right}>
        <ColumnContent>
            {children}
        </ColumnContent>
    </SideTextContainer>
}

const SectionHeaderContainer = styled.div`
    text-align: ${props => props.right ? 'right' : 'left'};
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

