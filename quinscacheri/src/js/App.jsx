import React, { useEffect } from 'react';
import Portfolio from './Portfolio';
import styled, { createGlobalStyle } from 'styled-components'
import { Parallax, Background } from 'react-parallax';
import { SideText, SectionHeader } from './Layout';
import useScroll from './useScroll'
import { useState } from 'react';
import { useRef } from 'react';

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
  font-size: 56px;

`
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`

const Divider = styled.div`
  height: 50vh;
  background: white;
  width: 100vw;
`

function App() {
  const scrollPos = useScroll()
  const [previousScroll, setPreviousScroll] = useState(0)
  const [scrollingToElement, setScrollingToElement] = useState(false)
  const skillsRef = useRef()
  useEffect(() => {
    if (scrollPos > previousScroll) {
      console.log("down");
      setScrollingToElement(true)
      window.scrollTo(0, skillsRef.current.offsetTop)
    }
    else
      console.log("up");

    setPreviousScroll(scrollPos)
    if (skillsRef.current)
      window.scrollTo(0, skillsRef.current.offsetTop)

  }, [skillsRef])
  return (
    <AppContainer className='App'>
      <GlobalStyle />
      <Parallax bgImage={require('../images/tree.svg')} strength={200} bgImageStyle={{ left: "100vw" }}>
        <div style={{ height: '100vh' }} >
          <Header>
            <Title>Quin Scacheri</Title>
            <Nav>
              <a>Bio</a>
              <a>Skills</a>
              <a>Projects</a>
            </Nav>
          </Header>
        </div>
      </Parallax>
      <Parallax bgImage={require('../images/tree2.svg')} strength={200} bgImageStyle={{ left: "0vw" }} >
        <div ref={skillsRef}>Skills</div>

      </Parallax>
      <SideText right>
        Quin is a graduate of the Music Technology program at New York
        University specializing in computer science and hardware development.
        Creating both practical tools as well as artistic experiments,
        Quin challenges himself to push the boundaries of what has been done
        in the realm of music technology and education.
      </SideText>

      <Portfolio />
    </AppContainer >
  );
}

export default App;
