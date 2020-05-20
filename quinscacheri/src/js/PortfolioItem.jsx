import React, { useEffect, useState } from 'react'
import '../css/PortfolioItem.css'

function PortfolioItem({name, imgSrc, youtubeLink, selectedProject, handleClick}) {
    const [selected, setSelected] = useState(false)
    const [thumbnailURL, setThumbnailURL] = useState("")

    const getYoutubeThumbnail = () => {
        const id = youtubeLink.split("watch?v=")[1]
        const url = "http://img.youtube.com/vi/" + id + "/0.jpg"
        setThumbnailURL(url)
    }

    useEffect(() => {
        console.log(selectedProject);
        
        setSelected(name === selectedProject)     
        getYoutubeThumbnail()       
    })

    const className = selected ? "PortfolioItem selected" : "PortfolioItem"
    console.log(className);
    
    return (<div className={className} onClick={() => handleClick(name)}>
        <h3>{name}</h3>
        <img src={thumbnailURL ? thumbnailURL : imgSrc} alt="project"/>
    </div>)
}

export default PortfolioItem