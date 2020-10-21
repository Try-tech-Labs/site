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
    return (
        <div className="card">
            <div className="avatar_and_links">
                <img className="avatar" src={props.avatar_image} alt="Developer avatar image"/>
                <div className="social_media">
                    <a target="_blank" href={props.twitter_url}><img src={Twitter} alt="Twitter logo"/></a>
                    <a target="_blank" href={props.linkedin_url}><img src={LinkedIn} alt="LinkedIn logo"/></a>
                    <a target="_blank" href={props.github_url}><img src={Github} alt="Githubt logo"/></a>
                </div>
            </div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <div className="skills">
                <label htmlFor="skills">Main skills:</label> 
                <span id="skills">{props.development_skills.map(skill => {
                    return skill+" "
                })}</span>
            </div>
        </div>
    )   
}
