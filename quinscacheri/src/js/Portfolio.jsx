import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import '../css/Section.css'
import '../css/Portfolio.css'

function Portfolio() {
    const [selectedProject, setSelectedProject] = useState("")

    const handleClick = (name) => {
        if (selectedProject === name)
            setSelectedProject("")
        else
            setSelectedProject(name)
        
        console.log(name);
        
    }

    const sharedProps = {selectedProject, handleClick}

    return (<div className="Portfolio Section">
        <h2>Portfolio</h2>
        <div className='projects'>
            <PortfolioItem
                name="Ringo"
                youtubeLink="https://www.youtube.com/watch?v=uUXDx-zDprc"
                {...sharedProps}
            />

            <PortfolioItem
                name="Magenta Beats"
                youtubeLink="https://www.youtube.com/watch?v=cfjhcLsOwrg"
                {...sharedProps}
            />

            <PortfolioItem
                name="Groove Pizza Plug-In"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="aQWERTYon Plug-In"
                youtubeLink="https://www.youtube.com/watch?v=i8iuJNTjoPU"
                {...sharedProps}
            />

            <PortfolioItem
                name="Spotilytics"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Bose Birds"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Sound Garden"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Infinite"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Procedural Piet"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Black Box"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Word Tree"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                {...sharedProps}
            />

            <PortfolioItem
                name="Scratch-X Music"
                youtubeLink="https://www.youtube.com/watch?v=vowEv5RG0HA"
                {...sharedProps}
            />

            <PortfolioItem
                name="Procedural Piet"
                youtubeLink="https://www.youtube.com/watch?v=meGrOHlFl4k"
                selectedProject={selectedProject}
                handleClick={handleClick}
            />

        </div>

    </div>)
}

export default Portfolio