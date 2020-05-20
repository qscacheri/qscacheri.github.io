import React, { useEffect, useState } from 'react'
import '../css/PortfolioItem.css'

function PortfolioItem({name, imgSrc, youtubeLink, selectedProject, handleClick}) {
    const [selected, setSelected] = useState(false)
    const [thumbnailURL, setThumbnailURL] = useState("")

    useEffect(() => {
        setSelected(name === selectedProject)     
        getYoutubeThumbnail()   
    })

    const getYoutubeThumbnail = () => {
        const id = youtubeLink.split("watch?v=")[1]
        console.log(id);
        const url = "http://img.youtube.com/vi/" + id + "/0.jpg"
        setThumbnailURL(url)
    }

    return (<div className="PortfolioItem" onClick={() => handleClick(name)}>
        <h3>{name}</h3>
        <img src={thumbnailURL ? thumbnailURL : imgSrc} alt="project"/>
    </div>)
}

export default PortfolioItem