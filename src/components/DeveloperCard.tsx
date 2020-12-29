import React from 'react';

import '../styles/components/DeveloperCard.css';

import Twitter from '../images/Twitter.svg';
import LinkedIn from '../images/LinkedIn.svg';
import Github from '../images/Github.svg';

interface DeveloperProps{
    name: string,
    avatar_image: string,
    description: string,
    twitter_url: string,
    linkedin_url: string,
    github_url: string,
    development_skills: Array<string>
}

export default function DeveloperCard(props: DeveloperProps){

    const getValidDeveloperSkills = (skills:any) => {
        if(skills){
            const skills_map = skills.map((skill:string) => {
                return " "+skill
            })
            return skills_map.toString()
        }
        return "N/A"
    }

    const getValidDeveloperName = (name:any) => {
        return name ? name : "N/A"
    }

    const getValidDeveloperDescription = (description: any) => {
        return description ? description :  "N/A"
    }

    const getValidAvatarImage = (avatar_image:any) => {
        return avatar_image ? avatar_image : "http://trytechlabs.com/images/developer.png"
    }

    return (
        <div className="card">
            <div className="avatar_and_links">
                <img data-testid="avatar" className="avatar" src={getValidAvatarImage(props.avatar_image)} alt="Developer avatar image"/>
                <div className="social_media">
                    <a data-testid="twitter-link" target="_blank" href={props.twitter_url}><img src={Twitter} alt="Twitter logo"/></a>
                    <a data-testid="linkedin-link" target="_blank" href={props.linkedin_url}><img src={LinkedIn} alt="LinkedIn logo"/></a>
                    <a data-testid="github-link" target="_blank" href={props.github_url}><img src={Github} alt="Githubt logo"/></a>
                </div>
            </div>
            <h1 data-testid="name">{getValidDeveloperName(props.name)}</h1>
            <p>{getValidDeveloperDescription(props.description)}</p>
            <div className="skills">
                <label htmlFor="skills">Main skills:</label> 
                <span data-testid="skills" id="skills">{getValidDeveloperSkills(props.development_skills)}</span>
            </div>
        </div>
    )   
}
