import React from 'react'
import { Parallax, Background } from 'react-parallax';
import { SectionHeader } from './Layout';
import styled from 'styled-components';

const SectionContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: right;
`

const SkillsList = styled.ul`
    background: rgb(200, 255, 42);
    margin: 24px;
    background: none;;
    height: 50%;
    text-align: right;
    li {
        font-size: 24px;
        list-style: none;
    }
`
const Skills = React.forwardRef((_, ref) => {

    return <Parallax bgImage={require('../images/tree2.svg')} strength={200} bgImageStyle={{ left: '0px', maxWidth: "1500px" }}>
        <SectionContainer ref={ref}>
            <SectionHeader>Skills</SectionHeader>
            <SkillsList>
                <li>Fullstack Development</li>
                <li>Audio Plug-In Development</li>
                <li>Creative Coding</li>
            </SkillsList>
        </SectionContainer>

    </Parallax>
})

export default Skills