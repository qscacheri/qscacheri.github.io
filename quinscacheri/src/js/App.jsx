import React, { useEffect } from 'react';
import Portfolio from './Portfolio';
import styled, { createGlobalStyle } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import { SideColumn, SectionHeader } from './Layout';
import useScroll from './useScroll'
import useScrollDirection from './useScrollDirection'

import { useState } from 'react';
import { useRef } from 'react';
import Skills from './Skills';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,600&display=swap');
  font-family: Raleway;
`

const AppContainer = styled.div`

`

const Header = styled.header`
  position: relative;
  margin: 10px;

`

const Title = styled.h1`
  font-weight: 200;
  font-size: 100px;

`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`

const NavItem = styled.div`
  cursor: pointer;
  font-size: 36px;
  min-width: 5%;
  width : 10%;
  margin: 2px;
  display: flex;
  flex-direction: column;
  &&::after {
    position: relative;
    content: "";
    background: black;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    visibility: hidden;
    transition: all 0.3s ease-in-out 0s;

  }
  :hover::after {
    transform: scaleX(1);
    visibility: visible;
    
  }
`

const Divider = styled.div`
  height: 2px;
  background: pink;
  width: 100vw;
`

function App() {

  const skillsRef = useRef()
  return (
    <AppContainer className='App'>
      <GlobalStyle />
      <Parallax bgImage={require('../images/tree.svg')} strength={500} bgImageStyle={{ width: '100vw', position: 'absolute', right: "0" }} blur={{ min: -5, max: 10 }}
      >
        <div style={{ height: '100vh' }} >
          <Header>
            <Title>Quin Scacheri</Title>
            <Nav>
              <NavItem>Bio</NavItem>
              <br />
              <NavItem onClick={() => skillsRef.current.scrollIntoView({
                behavior: "smooth"
              })}>Skills</NavItem>
              <br />
              <NavItem>Projects</NavItem>
            </Nav>
          </Header>
        </div>
      </Parallax>
      {/* <Divider /> */}
      <Skills ref={skillsRef} />
      {/* <SideColumn right>
        Quin is a graduate of the Music Technology program at New York
        University specializing in computer science and hardware development.
        Creating both practical tools as well as artistic experiments,
        Quin challenges himself to push the boundaries of what has been done
        in the realm of music technology and education.
      </SideColumn> */}
      <Portfolio />
    </AppContainer >
  );
}

export default App;
