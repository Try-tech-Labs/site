import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_AUTH_TOKEN });

async function getUserRepositories(userName: string){
    const response = await octokit.repos.listForUser({
        username: userName,
    });
    return response.data
}

async function getLanguages(userName: string){
    let repositories = await getUserRepositories(userName)
    const languages = Promise.all(
        repositories.map(async (repository: { language: any; }) => {
            if(repository.language)
                return repository.language
        })
    )
    return Array.from(new Set(await languages)).filter(Boolean)
}

async function getOrganizationMembersName(organization:string){
    const response = await octokit.orgs.listMembers({
        org: organization,
      });
    let members = response.data.filter((item) => {
        if(item.login != "admin-trytechlabs"){
            return item
        }
    })
    return members.map(member => {
        return member.login;
    });
}

async function getUserData(userName:string){
    const response = await octokit.users.getByUsername({
        username: userName,
    })
    return response.data;
}

function getLinkedinLink(text:string){
    const link_start = text.search('https://')
    const str = text.substring(link_start, text.length);
    return str.includes("http") ? str : "https://linkedin.com"
}

function removeBioLinks(bio:string){
    if(!bio)
        return bio
    const link_start = bio.search('https://')
    if(link_start){
        return bio.substring(0, link_start);
    }   
    return bio 
}

export default async function getDevelopers(){
    const org_members = await getOrganizationMembersName("Try-tech-Labs");
     let developers = Promise.all(
        org_members.map(async (member) => {
            const developerData = await getUserData(member);
            let repositorieLanguages = await getLanguages(member)
            const linkedin_url = getLinkedinLink(developerData.bio)
            const bio = removeBioLinks(developerData.bio)
            const developer = {
                "name": developerData.name,
                "avatar_image": developerData.avatar_url,
                "description": bio || "Nothing to say about me :)" ,
                "twitter_url": ("https://twitter.com/"+(developerData.twitter_username || "")),
                "linkedin_url": linkedin_url,
                "github_url": developerData.html_url,
                "development_skills": repositorieLanguages
            }
            return developer;
        })
    )
    return developers;
}