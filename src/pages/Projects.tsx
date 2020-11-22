import React from 'react'

import '../styles/pages/Projects.css'

import Diana from '../images/Diana.svg'

import BackgroundLeftDetail from '../images/BackgroundBottomLeftDetailLight.svg'
import BackgroundRightDetail from '../images/BackgroundBottomRightDetailLight.svg'


import ProjectCard from '../components/ProjectCard'


export default function Projects() {
    var trends_props = {
        name:"BR.TRENDS",
        presentation_image:"https://cdn.theatlantic.com/thumbor/nTObmgixnAr5Gei2QRLcJ1Kl4R8=/438x0:1563x1125/500x500/media/img/mt/2020/05/Webart_TwitterTrump/original.jpg",
        presentation_image_gradient_color:"",
        description:"A tool to get Brazilian trending topics",
        background_color:"#1CA1F1"
    }
    var diana_props = {
        name:"D.I.A.N.A",
        presentation_image:Diana,
        presentation_image_gradient_color: "linear-gradient(180deg, #2E0045 0%, #5223C9 100%)",
        description:"A new way to consume online content",
        background_color:"#5024B5"
    }
    var default_props = {
        name:"",
        presentation_image:"",
        presentation_image_gradient_color: "linear-gradient(180deg, #FFFFFF 0%, #0E538C 100%)",
        description:"",
        background_color:""
    }
    return(
        <div id="page-projects">
            <img src={BackgroundLeftDetail} alt="background bottom left detail" className="background-left-detail"/>
            <img src={BackgroundRightDetail} alt="background bottom right detail" className="background-right-detail"/>
            <div className="title">
                <h1>Our tries</h1>
            </div>
            <div className="projects">
                <ProjectCard {...trends_props} />
                <ProjectCard {...diana_props} />
                <ProjectCard {...default_props} />
                <ProjectCard {...default_props} />
                <ProjectCard {...default_props} />
                <ProjectCard {...default_props} />
            </div>
        </div>
    )

}