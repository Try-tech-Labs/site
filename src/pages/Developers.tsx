import React, { useState, useEffect } from 'react';

import '../styles/pages/Developer.css';

import DeveloperCard from '../components/DeveloperCard';

import getDevelopers from '../services/DeveloperService';

interface DeveloperProps {
    name: string,
    avatar_image: string,
    description: string,
    twitter_url: string,
    linkedin_url: string,
    github_url: string,
    development_skills: any
}

export default function Developers() {

    const [developers, setDevelopers] = useState<DeveloperProps[]>([])

    useEffect(() => {
        getDevelopers().then(developers => {
            setDevelopers(developers);
        }).catch(() => {
            setDevelopers([
                {
                    "name": "The developer",
                    "avatar_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/LinuxCon_Europe_Linus_Torvalds_03.jpg/200px-LinuxCon_Europe_Linus_Torvalds_03.jpg",
                    "description": "This guy really knows about development. He is an icon of tech.",
                    "twitter_url": "https://twitter.com/linus__torvalds",
                    "linkedin_url": "https://www.linkedin.com/in/linustorvalds/",
                    "github_url": "https://github.com/torvalds",
                    "development_skills": ["C", "C++"]
                }
            ])
        })
    }, []);

    return (
        <div id="page-developers">
            <div className="title">
                <h1>About us</h1>
            </div>
            <div className="developers">
                {developers && (
                    developers.map(developer => {
                        return (
                            <DeveloperCard
                                key={developer.name}
                                name={developer.name}
                                avatar_image={developer.avatar_image}
                                description={developer.description  || "Nothing to say about me :)" }
                                twitter_url={`https://twitter.com/${developer.twitter_url || ""}`}
                                linkedin_url={`${developer.linkedin_url || 'https://linkedin.com/'}`}
                                github_url={developer.github_url}
                                development_skills={developer.development_skills} />
                        )
                    })
                )}
            </div>
        </div>
    )
}
