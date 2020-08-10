import React from 'react'
import styled from 'styled-components'
import treeSVG from '../images/tree.svg'
const ParallaxWrapper = styled.div`
box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  margin: 0;
  &&::before {
    content: "";
    width: 100%;
    height: 100%; 
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${treeSVG}});
    background-repeat: no-repeat;
    background-size:100% 100%;
    z-index: -1;
    transform: translateZ(-1px) scale(2);
    margin: 0;
}
`

export default ParallaxWrapper