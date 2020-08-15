import React from 'react'
import { Parallax, Background } from 'react-parallax';
import { SideColumn } from './Layout';
import styled from 'styled-components';
import FadeIn from './FadeIn';
import { useState } from 'react';
import noteIcon from '../images/notes.svg'
import dbIcon from '../images/db.svg'
import paintBrush from '../images/paint_brush.svg'
const VisibilitySensor = require('react-visibility-sensor').default;

const SectionContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    align-items: right;
    /* background: #FFFFFF67;
    backdrop-filter: blur(6px); */

`

const SectionContent = styled.div`
    width: 50%;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* background: white; */
`

const SectionHeader = styled.h1`
    margin: auto;
    font-size: 72px;
    font-weight: 100;
`

const SkillsItem = styled.div`
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
    width: 100%;
    p {
        white-space: nowrap;
        font-size: 36px;
        margin: auto 2px;
    }
`

const SkillsIcon = styled.img`
    width: 48px;
    height: 48px;
    margin: auto 0;
`

const Skills = React.forwardRef((_, ref) => {
    const [iconsVisible, setIconsVisible] = useState(false)
    const handleVisibilityChange = (isVisible) => {
        setIconsVisible(isVisible)
        console.log(isVisible);
    }
    return <Parallax
        bgImage={require('../images/tree3.svg')}
        strength={-200}
        bgImageStyle={{ height: "100vh", width: '75vw' }}
        blur={{ min: 0, max: 5 }}
    >
        <VisibilitySensor onChange={handleVisibilityChange}>

            <SectionContainer className='section-container'>
                <SectionContent className='content-container'>
                    <SectionHeader>Skills</SectionHeader>
                    <FadeIn visible={iconsVisible} delay="500ms">
                        <SkillsItem>
                            <p>Full Stack Development</p>
                            <SkillsIcon src={dbIcon} />
                        </SkillsItem>
                    </FadeIn>
                    <FadeIn visible={iconsVisible} delay="1000ms">
                        <SkillsItem>
                            <p>Audio Plug-In Development</p>
                            <SkillsIcon src={noteIcon} />
                        </SkillsItem>
                    </FadeIn>
                    <VisibilitySensor onChange={handleVisibilityChange}>
                        <FadeIn visible={iconsVisible} delay="1500ms">

                            <SkillsItem>
                                <p>Creative Coding</p>
                                <SkillsIcon src={paintBrush} />

                            </SkillsItem>
                        </FadeIn>
                    </VisibilitySensor>
                </SectionContent>
            </SectionContainer>
        </VisibilitySensor>

    </Parallax >
})

export default Skills