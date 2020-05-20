import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import '../css/Portfolio.css'

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState("")

    const handleClick = (name) => {
        if (selectedProject === name)
            setSelectedProject("")
        else
            setSelectedProject(name)
    }

    return (<div className="Portfolio">
        <PortfolioItem
            name="Ringo: A Max-Like Programming Environment"
            youtubeLink="https://www.youtube.com/watch?v=uUXDx-zDprc"
            selectedProject={selectedProject}
            handleClick={handleClick}
        />

        <PortfolioItem
            name="Groove Pizza"
            youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
            selectedProject={selectedProject}
            handleClick={handleClick}
        />

        <PortfolioItem
            name="Groove Pizza"
            youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
            selectedProject={selectedProject}
            handleClick={handleClick}
        />

    </div>)
}

export default Portfolio