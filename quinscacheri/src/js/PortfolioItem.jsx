import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import '../css/PortfolioItem.css'
const PortfolioItemContainer = styled.div`
    width: 100%;
    height: 100%;
    background: blue;
`
const Thumbnail = styled.img`
    max-width: 100%;
    height: auto;
`

function PortfolioItem({ name, imgSrc, youtubeLink, selectedProject, handleClick }) {
    const [selected, setSelected] = useState(false)
    const [thumbnailURL, setThumbnailURL] = useState("")

    const getYoutubeThumbnail = () => {
        const id = youtubeLink.split("watch?v=")[1]
        const url = "http://img.youtube.com/vi/" + id + "/0.jpg"
        setThumbnailURL(url)
    }

    useEffect(() => {
        setSelected(name === selectedProject)
        getYoutubeThumbnail()
    })

    return (<PortfolioItemContainer onClick={() => handleClick(name)}>
        {/* <h3>{name}</h3> */}
        <Thumbnail src={thumbnailURL ? thumbnailURL : imgSrc} alt="project" />
    </PortfolioItemContainer>)
}

export default PortfolioItem