import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { cleanup, render } from '@testing-library/react'

import DeveloperCard from '../../components/DeveloperCard'


const setup = () => {

    const props = {
        name: "Rod",
        avatar_image: "https://revistahotrods.com.br/wp-content/uploads/2017/04/01.jpg",
        description: "Oldschool guy that loves to be fast.",
        twitter_url: "https://twitter.com/roddeveloper",
        linkedin_url: "https://linkedin.com/roddeveloper",
        github_url: "https://github.com/roddeveloper",
        development_skills: ['Delphi', 'XGH']
    }

    const wrapper = render(
        <DeveloperCard {...props} />
    )
    return {wrapper, props}
}

describe('DeveloperCard', () => {

    afterEach (() => {
        cleanup()
    }) 

    it('renders with correct information', () => {
        const { wrapper } = setup()
        const { getByText, getByTestId } = wrapper
        getByText('Rod')
        expect(getByTestId("avatar").getAttribute("src")).toEqual("https://revistahotrods.com.br/wp-content/uploads/2017/04/01.jpg")
        expect(getByTestId("twitter-link").getAttribute("href")).toEqual("https://twitter.com/roddeveloper")
        expect(getByTestId("linkedin-link").getAttribute("href")).toEqual("https://linkedin.com/roddeveloper")
        expect(getByTestId("github-link").getAttribute("href")).toEqual("https://github.com/roddeveloper")
        getByText('Delphi, XGH')
    })

    it('doesnt breaks with null props', () => {
        const props = {
            name: null,
            avatar_image: null,
            description: null,
            twitter_url: null,
            linkedin_url: null,
            github_url: null,
            development_skills: []
        }
        const wrapper = render(<DeveloperCard {...{props}} />)
        const { getByTestId, getAllByText } = wrapper
        expect(getAllByText("N/A").length).toBe(3)
        expect(getByTestId("avatar").getAttribute("src")).toEqual("http://trytechlabs.com/images/developer.png")
        expect(getByTestId("twitter-link").hasAttribute("href")).toBeFalsy()
        expect(getByTestId("linkedin-link").hasAttribute("href")).toBeFalsy()
        expect(getByTestId("github-link").hasAttribute("href")).toBeFalsy()
    })

})