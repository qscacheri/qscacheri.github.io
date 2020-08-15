import React from 'react'
import styled from 'styled-components'

const FadeInIconContainer = styled.div`
    && * {
        opacity: ${props => props.visible ? 1 : 0};
        transition-delay: ${props => props.delay};
        transition: ${({ visible, delay }) => `all ${visible ? '1000ms' : '0ms'} ease ${visible ? delay : '0ms'}`};
    }
`

const FadeIn = ({ visible, hide, delay = '0ms', children }) => {
    console.log('render');
    return <FadeInIconContainer visible={visible} delay={delay} className='fade-in'>
        {children}
    </FadeInIconContainer>
}

export default FadeIn