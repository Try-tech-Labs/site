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
        })
    }, []);

    return (
        <div id="page-developers">
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
