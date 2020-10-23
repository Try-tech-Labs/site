import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { cleanup, render } from '@testing-library/react'

import NavigationMenu from '../NavigationMenu'


const setup = () => {

    const props = {
        useLogo: true
    }

    const wrapper = render(
        <NavigationMenu {...props} />
    )
    return {wrapper, props}
}

describe('DeveloperCard', () => {

    afterEach (() => {
        cleanup()
    }) 

    it('displays the navigation links', () => {
        const { wrapper } = setup()
        const { getByText } = wrapper
        getByText("Home")
        getByText("About us")
        getByText("Our tries")
        getByText("Contribute")

    })

    it('displays with the site logo', () => {
        const { wrapper } = setup()
        const { getByAltText } = wrapper
        const logo = getByAltText("Web site logo image")
        expect(logo.getAttribute('width')).toEqual("162")
        expect(logo.getAttribute('height')).toEqual("70")
        expect(logo.classList.contains('site_menu')).toBe(true)
    })

    it('doesnt breaks when renders without site logo', () => {
        const props = {
            useLogo: false
        }
        const wrapper = render(<NavigationMenu {...{props}} />)
        const { getByText, queryByTestId } = wrapper
        getByText("Home")
        getByText("About us")
        getByText("Our tries")
        getByText("Contribute")
        expect(queryByTestId('logo')).toBeNull()
    })
})